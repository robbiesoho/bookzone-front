import React, { SyntheticEvent, useState, useEffect } from "react";
import { IBookState } from "../Models";
import { connect, useDispatch } from "react-redux";
import { showBooks } from "../actions/book-action";
// import { connector } from "../containers/ShowBookContainer";

import axios from "axios";
import { store } from "../store/Store";

export const ShowBooks: React.FC<IBookState> = (props: IBookState) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBooks());
  }, []);

  // console.log("PROPS: ");
  // console.log(props.books);
  // console.log("PROPS[0]: ");
  // console.log(props.books[0]);

  return (
    <div>
      <h1>Bookzone</h1>
      <ul>
        {props.books &&
          props.books.map((b, i) => {
            return <li key={i}>{b.title}</li>;
          })}
      </ul>
    </div>
  );
};

// const mapStateToProps = (state: IState) => {
//   return {
//     email: state.userState.email,
//   };
// };

// export default connect(mapStateToProps)(HomePage);

/**
 * NOTE:
 * You won't always have a type like IRecordsState readily available for passing in as your prop type.
 * The actual prop type will ALWAYS be a combination of your "mapStateToProps" return type and your "mapDispatchToProps" object type.
 * For instance, if your mapStateToProps returns "{num: 7}" and your mapDispatchToProps is "{str: 'hello'}", then your prop typs will be {num:number, str:string}
 *
 * Since there wasn't a mapDispatchToProps passed in, the type is the same as the object returned from mapStateToProps; a type IRecordsState.
 */

//  <table>
//    <thead>
//      <tr>
//        <th>title</th>
//        <th>author</th>
//        <th>date</th>
//      </tr>
//    </thead>
//    <tbody>
//      {props.books.map((book, index) => (
//        <tr key={index}>
//          <td>{book.authorId}</td>
//          {/* <td>{book.authorId}</td>
//               <td>{book.published}</td> */}
//        </tr>
//      ))}
//    </tbody>
//  </table>;
