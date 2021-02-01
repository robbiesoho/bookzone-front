import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import ShowBookContainer from "./containers/ShowBookContainer";

import { store } from "./store/Store";
// import TableContentsContainer from "./containers/TableContentsContainer";
// import DataEntryContainer from "./containers/DataEntryContainer";

function App() {
  return (
    <div className="App">
      <ShowBookContainer />
    </div>
  );
}

export default App;
