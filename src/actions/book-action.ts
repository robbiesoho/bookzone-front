import { ShowBooks } from "../components/ShowBooks";
import { axiosInstance } from "../util/axiosConfig";
export const showBooks = () => async (dispatch: any) => {
  const response = await axiosInstance.get("");
  // const books: ShowBooks;

  dispatch({
    type: "SHOW_BOOKS",
    payload: {
      response,
    },
  });
};
