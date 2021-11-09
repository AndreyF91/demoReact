import "./Header.scss";
import Header from "./Header";
import React from "react";
import { connect } from "react-redux";
import {
  logoutMeThunkCreator,
  setProfileDataActionCreator,
  setUserDataActionCreator,
} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {


  render() {
    return <Header {...this.props} />;
  }
}

let mapStateToProps = (state) => {
  return {
    userId: state.auth.userId,
    email: state.auth.email,
    login: state.auth.login,
    isAuth: state.auth.isAuth,
    userAva: state.auth.photos,
  };
};

export default connect(mapStateToProps, {
  setAuthUserData: setUserDataActionCreator,
  setProfileData: setProfileDataActionCreator,
  logOut: logoutMeThunkCreator,
})(HeaderContainer);
