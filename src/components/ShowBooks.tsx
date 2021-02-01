import React from "react";
import { IBookState } from "../store/reducers/BookReducer";
import axios from "axios";

export const ShowBooks: React.FC<IBookState> = (props: IBookState) => {
  console.log(props);

  return (
    <tbody>
      {props.books.map((book, index) => (
        <tr key={index}>
          <td>{book.title}</td>
          <td>{book.authorId}</td>
          <td>${book.published}</td>
        </tr>
      ))}
    </tbody>
  );
};
/**
 * NOTE:
 * You won't always have a type like IRecordsState readily available for passing in as your prop type.
 * The actual prop type will ALWAYS be a combination of your "mapStateToProps" return type and your "mapDispatchToProps" object type.
 * For instance, if your mapStateToProps returns "{num: 7}" and your mapDispatchToProps is "{str: 'hello'}", then your prop typs will be {num:number, str:string}
 *
 * Since there wasn't a mapDispatchToProps passed in, the type is the same as the object returned from mapStateToProps; a type IRecordsState.
 */
