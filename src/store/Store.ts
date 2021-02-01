import {
  AnyAction,
  CombinedState,
  combineReducers,
  createStore,
  Reducer,
  Store,
} from "redux";
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

export const store: Store<IRootState> = createStore(combinedReducer);
