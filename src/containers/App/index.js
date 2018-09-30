import React, { Component } from "react";
import { connect } from 'react-redux';
import "./index.css";

import UsersList from '../../components/UsersList';
import UserSummary from '../../components/UserSummary';

import {getAllUsersAction} from '../../redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.userClicked = this.userClicked.bind(this);
    this.state = {
      selectedUser: null
    }
  }
  userClicked(item) {
    this.setState({
      ...this.state,
      selectedUser: item
    });
  }

  componentDidMount() {
    this.props.loadAllUsers();
  }
  render() {
    return (
      <div className="App">
        <h1>List of users</h1>
        <UsersList
          list={this.props.users}
          userClicked={this.userClicked}
        />
        <UserSummary user={this.state.selectedUser}/>
      </div>
    );
  }
}

const mapStateToProps = ({users}) => ({
  users: users.usersList
});

const mapDispatchToProps = (dispatch) => {
  return {
    loadAllUsers: () => {
      dispatch(getAllUsersAction())
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
