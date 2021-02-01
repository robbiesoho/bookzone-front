import { connect } from "react-redux";
import { ShowBooks } from "../components/ShowBooks";
import { IBookState } from "../store/reducers/BookReducer";
import { IRootState } from "../store/Store";

const mapStateToProps: (s: IRootState) => IBookState = (state: IRootState) => {
  return {
    books: state.BooksState.books,
  };
};

export default connect(mapStateToProps)(ShowBooks);
