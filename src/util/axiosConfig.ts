import Axios from "axios";
/**
 * This is the configuration for axios, there are tons
 * more configurations that you can give, there are
 * also defaults you can give outside of this create
 * function and when you call the instance's methods,
 * these properties can be overridden.
 */

export const axiosInstance = Axios.create({
  baseURL: "http://localhost:9000/book/all",
});
