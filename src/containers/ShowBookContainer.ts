import { connect } from "react-redux";
import { showBooks } from "../actions/book-action";
import { ShowBooks } from "../components/ShowBooks";
import { IRootState } from "../Models";

const mapStateToProps = (state: IRootState) => {
  return {
    books: state.bookState.books,
  };
};

const mapDispatchToProps = {
  showBooks: showBooks,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowBooks);
