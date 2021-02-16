import { Dispatch } from "react";
import { connect, ConnectedProps } from "react-redux";
import { AnyAction } from "redux";
import { showBooks } from "../actions/book-action";
import { ShowBooks } from "../components/ShowBooks";
import { IBookState, IRootState } from "../Models";

const mapStateToProps = (state: IRootState) => {
  return {
    books: state.bookState.books,
  };
};

const mapDispatchToProps = {
  showBooks: showBooks,
};

// export default connect(mapStateToProps, mapDispatchToProps);
// export const connector = connect(mapStateToProps, mapDispatchToProps);
// export type ContainerProps = ConnectedProps<typeof connector>;

export default connect(mapStateToProps, mapDispatchToProps)(ShowBooks);
