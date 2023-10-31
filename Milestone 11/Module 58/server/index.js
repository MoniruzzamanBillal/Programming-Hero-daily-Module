const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId, upsert } = require("mongodb");

const app = express();
const port = process.env.PORT || 5000;

app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:5173"],
    credentials: true,
  })
);
app.use(express.json());

// mongo db

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@coffeemaster.pnefqpd.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

// middle wires

const verifyToken = (req, res, next) => {
  const token = req.cookies?.token;

  // console.log("token in middlewire = ", token);

  if (!token) {
    res.status(401).send({ message: "unauthorized access" });
  }

  jwt.verify(token, process.env.Access_Token_SECRET, (err, decoded) => {
    if (err) {
      res.status(401).send({ message: "unauthorized access" });
    }
    req.user = decoded;
    next();
  });

  // next();
};

async function run() {
  try {
    const dataBase = client.db("Car-doctor");
    const serviceCollection = dataBase.collection("services");
    const serviceBokCollection = dataBase.collection("serviceBook");

    // json web token send
    app.post("/jwt", async (req, res) => {
      const data = req.body;

      const token = jwt.sign(data, process.env.Access_Token_SECRET, {
        expiresIn: "1h",
      });

      res
        .cookie("token", token, {
          httpOnly: true,
          secure: false,
        })
        .send({ success: true });
    });

    // token delete
    app.post("/logout", async (req, res) => {
      const data = req.body;
      console.log(data);
      res
        .clearCookie("token", {
          maxAge: 0,
        })
        .send({ message: "successfully logout " });
    });

    // service get
    app.get("/services", async (req, res) => {
      const response = serviceCollection.find();
      const result = await response.toArray();

      res.send(result);
    });

    // specific service
    app.get("/service/:id", async (req, res) => {
      const id = req.params.id;
      //   console.log(id);
      console.log(req.query);
      const query = { _id: new ObjectId(id) };

      const options = {
        projection: { description: 1, facility: 1, img: 1, price: 1, title: 1 },
      };
      const response = await serviceCollection.findOne(query, options);
      //   console.log(response);
      res.send(response);
    });

    // add data to service booking
    app.post("/booking", async (req, res) => {
      const data = req.body;

      const response = await serviceBokCollection.insertOne(data);

      res.send(response);
      // console.log(data);
    });

    // get bookings
    app.get("/booking", verifyToken, async (req, res) => {
      let query = {};

      console.log("token owner info = ", req.user);

      if (req.user?.email !== req.query?.email) {
        return res.send({ message: "forbidden access" });
      }

      if (req.query?.email) {
        query = { loggedUser: req.query.email };
      }

      const result = await serviceBokCollection.find(query).toArray();

      res.send(result);
    });

    //
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
  }
}
run().catch(console.dir);

//
app.get("/", (req, res) => {
  res.send("doctor server is running ");
});

app.listen(port, () => {
  console.log(`listening from port ${port}`);
});
