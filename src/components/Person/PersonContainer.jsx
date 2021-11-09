import React from "react";
import Person from "./Person";
import "./Person.scss";
import { connect } from "react-redux";
import {
  getProfileThunkCreator,
  getStatusThunkCreator,
  setUserProfile,
  updateStatusThunkCreator,
  savePhotoThunkCreator,
  saveProfileThunkCreator
} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";

class PersonContainer extends React.Component {
  refreshProfile() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = this.props.myId;
    }
    this.props.getProfile(userId);
    this.props.getStatus(userId);
  }

  componentDidMount() {
    this.refreshProfile();
  }
  componentDidUpdate(prevProps) {
    if (this.props.match.params.userId !== prevProps.match.params.userId) {
      this.refreshProfile();
    }
  }
  render() {
    return (
      <Person
        {...this.props}
        profile={this.props.profile}
        isOwner={!this.props.match.params.userId}
        savePhoto={this.props.savePhoto}
      />
    );
  }
}

// let AuthRedirectComponent = AuthRedirect(PersonContainer); //hoc

// let mapStateToPropsForRedirect = (state) => ({
//   isAuth: state.auth.isAuth,
// });
// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent); //второй конект для хока... херня какая-то

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  myId: state.auth.userId,
});

// let UrlDataContainerComponent = withRouter(PersonContainer);

export default compose(
  connect(mapStateToProps, {
    setUserProfile,
    getProfile: getProfileThunkCreator,
    getStatus: getStatusThunkCreator,
    updateStatus: updateStatusThunkCreator,
    savePhoto: savePhotoThunkCreator,
    saveProfile: saveProfileThunkCreator
  }),
  withRouter,
  AuthRedirect
)(PersonContainer);
