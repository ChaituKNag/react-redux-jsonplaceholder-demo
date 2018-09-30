import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import AppPage from "./containers/AppPage";
import UserPage from "./containers/UserPage";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from "react-router-dom";
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route path="/" exact component={AppPage} />
        <Route path="/user" component={UserPage} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
