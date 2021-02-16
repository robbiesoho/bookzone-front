import { SHOW_BOOKS } from "./types";
import { axiosInstance } from "../util/axiosConfig";

export const showBooks = () => async (dispatch: any) => {
  const response = await axiosInstance.get("");

  dispatch({
    type: SHOW_BOOKS,
    payload: [...response.data.books],
  });
};
