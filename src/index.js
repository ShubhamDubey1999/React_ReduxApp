import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Layout/Header";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Counter from "./Components/Counter";
import DestinationList from "./Components/DestinationList";
import DestinationFact from "./Components/DestinationFact";
import ResetApp from "./Components/ResetApp";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="text-white">
      <Provider store={store}>
        <Header />
        <ResetApp />
        <Counter />
        <div className="p-4 border">
          <h4 className="text-success text-center">Destination List</h4>
          <DestinationList />
          <DestinationFact />
        </div>
      </Provider>
    </div>
  </React.StrictMode>
);
