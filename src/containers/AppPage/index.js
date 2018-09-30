import React, { Component } from "react";
import { connect } from 'react-redux';
import "./index.css";

import UsersList from '../../components/UsersList';
import UserSummary from '../../components/UserSummary';

import {getAllUsersAction, updateCurrentUserAction} from '../../redux/actions';

class AppPage extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadAllUsers();
  }
  render() {
    return (

      <div className="AppPage">
        <h1>List of users</h1>
        <UsersList
          list={this.props.users}
          userClicked={this.props.updateCurrentUser}
        />
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
    },
    updateCurrentUser: (user) => {
      dispatch(updateCurrentUserAction(user))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AppPage);
