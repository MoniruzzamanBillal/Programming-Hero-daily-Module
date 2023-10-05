import React, { useEffect, useState } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import NavBar from "../Components/NavBar";

const NewsDetails = () => {
  const navigate = useNavigate();
  const [existData, setExistData] = useState([]);

  const { id } = useParams();
  const responseData = useLoaderData();

  useEffect(() => {
    const filter = responseData.find((ele) => ele._id === id);

    if (filter) {
      setExistData(filter);
    }
  }, []);

  const handleNavigate = () => {
    navigate(-1);
  };
  return (
    <div>
      <NavBar />

      <div className="w-[65%] m-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
          <img className="rounded-t-lg" src={existData.image_url} alt="" />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-3 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {existData.title}
            </h5>
          </a>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {existData.details}
          </p>
          <button
            onClick={() => handleNavigate()}
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetails;
