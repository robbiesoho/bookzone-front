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
import { bookReducer } from "./reducers/BookReducer";
import { IBookState, IRootState } from "../Models";

const composeEnhancers =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const rootReducer: Reducer<
//   CombinedState<IRootState>,
//   AnyAction
// > = combineReducers<IRootState>({
//   BooksState: bookReducer,
// });

const rootReducer: Reducer<
  CombinedState<IRootState>,
  AnyAction
> = combineReducers<IRootState>({
  bookState: bookReducer,
});

export const store: Store<IRootState> = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
