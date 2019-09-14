import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import "./index.css";

import UserSummary from "../../components/UserSummary";

import { getAllUsersAction } from "../../redux/actions";

class AppPage extends Component {
  render() {
    if(!this.props.currentUser) {
        return (
            <Redirect to="/"/>
        )
    }
    return (
      <div className="UserPage">
        <UserSummary user={this.props.currentUser} />
      </div>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  currentUser: users.currentUser
});

const mapDispatchToProps = dispatch => {
  return {};
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppPage);
