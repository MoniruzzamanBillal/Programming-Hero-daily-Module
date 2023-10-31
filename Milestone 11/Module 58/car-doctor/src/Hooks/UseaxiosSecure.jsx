import axios from "axios";
import { useEffect } from "react";

const AxiosSecure = axios.create({
  baseURL: "http://localhost:5000",
  withCredentials: true,
});

const UseaxiosSecure = () => {
  useEffect(() => {
    AxiosSecure.interceptors.request.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.response.status === 401 || err) {
          console.log("log out the user ");
        }
      }
    );
  }, []);

  return AxiosSecure;
};

export default UseaxiosSecure;
