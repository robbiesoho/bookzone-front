import {
  AnyAction,
  CombinedState,
  combineReducers,
  createStore,
  Reducer,
  Store,
  compose,
  applyMiddleware,
} from "redux";
import thunk from "redux-thunk";
import { IBookState, bookReducer } from "./reducers/BookReducer";

export interface IRootState {
  BooksState: IBookState;
}

const combinedReducer: Reducer<
  CombinedState<IRootState>,
  AnyAction
> = combineReducers<IRootState>({
  BooksState: bookReducer,
});

const middleware = [thunk];

export const store: Store<IRootState> = createStore(
  combinedReducer,
  // compose(
  //   applyMiddleware(...middleware)
  //   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  // )
  applyMiddleware(thunk)
);
