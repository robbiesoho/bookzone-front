import React, { useEffect } from "react";
import { IBookState } from "../Models";
import { useDispatch } from "react-redux";
import { showBooks } from "../actions/book-action";
import { Table } from "react-bootstrap";

export const ShowBooks: React.FC<IBookState> = (props: IBookState) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showBooks());
  }, []);

  console.log(props);
  return (
    <div>
      <h1>Bookzone</h1>
      <h3>Your Books</h3>
      {/* <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Author Id</th>
            <th>Date Published</th>
          </tr>
        </thead>
        <tbody>
          {props.books &&
            props.books.map((b, i) => {
              <tr key={i}>
                <td>{b.title}</td>
                <td>{b.authorId}</td>
                <td>{b.published}</td>
              </tr>;
            })}
        </tbody>
      </Table> */}
      <ul>
        {props.books &&
          props.books.map((b, i) => {
            return <li key={i}>{b.title}</li>;
          })}
      </ul>
    </div>
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
