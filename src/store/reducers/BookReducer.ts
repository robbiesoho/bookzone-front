import { SHOW_BOOKS, ADD_BOOK } from "../../actions/types";
import { IBookState } from "../../Models";
import { IBook } from "../../Interfaces";

const intialState: IBookState = {
  books: [] as IBook[],
};

export const bookReducer = (
  state: IBookState = intialState,
  action: { type: string; payload: IBook }
) => {
  switch (action.type) {
    case SHOW_BOOKS:
      return {
        books: [...state.books, action.payload],
      };
    case ADD_BOOK:
      return {
        books: [...state.books, action.payload],
      };

    default:
      return state;
  }
};
