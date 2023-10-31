import { createBrowserRouter } from "react-router-dom";
import Root from "../Pages/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import About from "../Pages/About";
import Services from "../Pages/Services";
import PrvateRoute from "../Routes/PrvateRoute";
import Test from "../Components/Test";
import Bookings from "../Pages/Bookings";

export const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/test",
        element: <Test />,
      },
      {
        path: "/about",
        element: (
          <PrvateRoute>
            <About />
          </PrvateRoute>
        ),
      },
      {
        path: "/booking",
        element: (
          <PrvateRoute>
            <Bookings />
          </PrvateRoute>
        ),
      },
      {
        path: "/service/:id",
        element: <Services />,
      },
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);
