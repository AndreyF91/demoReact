import React from "react";
import { connect } from "react-redux";
import {
  followActionCreator,
  unfollowActionCreator,
  setCurrentPageActionCreator,
  followInProgressActionCreator,
  getUsersThunkCreator,
  followThunkCreator,
  unfollowThunkCreator,
} from "./../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import { compose } from "redux";
import {
  getCurrentPage,
  getFetching,
  getFollowStat,
  getPageSize,
  getTotalUsersCount,
  getUsers,
} from "../../redux/users-selectors";

class UsersAPIComponent extends React.Component {
  componentDidMount() {
    // this.props.isFetching(true);
    // usersAPI
    //   .getUsers(this.props.currentPage, this.props.pageSize)
    //   .then((response) => {
    //     this.props.isFetching(false);
    //     this.props.setUsers(response.items);
    //     this.props.setUsersTotalCount(response.totalCount / 100);
    //   });

    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
    this.props.setCurrentPage(pageNumber);

    // this.props.isFetching(true);
    // usersAPI.getUsers(pageNumber, this.props.pageSize).then((response) => {
    //   this.props.isFetching(false);
    //   this.props.setUsers(response.items);
    // });
  };

  render() {
    return (
      <>
        {this.props.fetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          users={this.props.users}
          onPageChanged={this.onPageChanged}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
          followStatus={this.props.followStat}
          followStatusInProgress={this.props.followStatus}
          followThunk={this.props.followThunk}
          unfollowThunk={this.props.unfollowThunk}
        />
      </>
    );
  }
}

// let mapStateToProps = (state) => {
//   return {
//     users: state.usersPage.users,
//     pageSize: state.usersPage.pageSize,
//     totalUsersCount: state.usersPage.totalUsersCount,
//     currentPage: state.usersPage.currentPage,
//     fetching: state.usersPage.isFetching,
//     followStat: state.usersPage.followInProgress,
//   };
// };
let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    fetching: getFetching(state),
    followStat: getFollowStat(state),
  };
};

export default compose(
  connect(mapStateToProps, {
    follow: followActionCreator,
    unfollow: unfollowActionCreator,
    setCurrentPage: setCurrentPageActionCreator,
    followStatus: followInProgressActionCreator,
    getUsers: getUsersThunkCreator,
    followThunk: followThunkCreator,
    unfollowThunk: unfollowThunkCreator,
  }),
  AuthRedirect
)(UsersAPIComponent);
