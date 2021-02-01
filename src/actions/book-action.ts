import { ShowBooks } from "../components/ShowBooks";
import { axiosInstance } from "../util/axiosConfig";
import { IBookState } from "../components/ShowBooks";
export const showBooks = () => async (dispatch: any) => {
  const response = await axiosInstance.get("");
  const books: IBook;
};
