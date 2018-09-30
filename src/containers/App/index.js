import React, { Component } from "react";
import "./index.css";

import UsersList from '../../components/UsersList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>List of users</h1>
        <UsersList
          list={[
            {
              id: 1,
              name: "Chaitu"
            },
            {
              id: 2,
              name: "Sowji"
            }
          ]}
        />
      </div>
    );
  }
}

export default App;
