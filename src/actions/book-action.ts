import { SHOW_BOOKS } from "./types";
import { IBook } from "../Interfaces";
import { axiosInstance } from "../util/axiosConfig";
import axios from "axios";

export const showBooks = () => async (dispatch: any) => {
  const response = await axiosInstance.get("");
  // const books: IBook[] = [];

  console.log("Response: ");
  console.log(response.data);

  dispatch({
    type: SHOW_BOOKS,
    payload: [...response.data.books],
  });
};

// export const fetchBooks = () => {
//   return (dispatch: any) => {
//     axios
//       .get("http://localhost:9000/book/all/")
//       .then(({ data }) => dispatch({ type: SHOW_BOOKS, books: data }))
//       .catch((err) => dispatch({ type: SHOW_BOOKS, error: err }));
//   };
// };

// export function fetchBooks(){
//   return function(dispatch){
//     return axios.get("http://localhost:9000/book/all/")
//     .then(({data}) => {
//       dispatch()
//     })
//   }
// }

// try {
//   let bookResp = await axios.get("http://localhost:9000/book/all");
//   const books: IBook[] = await bookResp.data;
//   console.log("ASDFASDF");
//   dispatch({
//     type: SHOW_BOOKS,
//     payload: books,
//   });
// } catch (e) {
//   return e.message;
// }
