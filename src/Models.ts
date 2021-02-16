import { IBook } from "./Interfaces";

export interface IBookState {
  books: IBook[];
}

export interface IRootState {
  bookState: IBookState;
}
