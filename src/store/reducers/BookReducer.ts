export interface IBook {
  published: Date;
  title: string;
  authorId: number;
}

export interface IBookState {
  books: IBook[];
}

const intialState: IBookState = {
  books: [] as IBook[],
};

export const bookReducer = (
  state: IBookState = intialState,
  action: { type: string; payload: IBook }
) => {
  switch (action.type) {
    case "ADD_BOOK":
      return {
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
};
