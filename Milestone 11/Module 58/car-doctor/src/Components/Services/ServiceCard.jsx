import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";

const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  const { user } = useContext(AuthContext);

  const handleBook = (id) => {
    console.log("click");
    // console.log(service);
    // console.log(user);
    const loggedUser = user.email;
    console.log(loggedUser);
    const sendData = { loggedUser, img, price, title };

    fetch("http://localhost:5000/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(sendData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-xl text-orange-500">Price: ${price}</p>
        <div className="card-actions">
          <Link to={`/service/${_id}`}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
        <div className="card-actions">
          <button className="btn btn-secondary" onClick={() => handleBook(_id)}>
            Book now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
