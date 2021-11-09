import { usersAPI } from "../API/api";
import { updateObjectInArray } from "../utils/object-helper";

const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET-USERS";
const SET_CURRENT_PAGE = "SET-CURRENT-PAGE";
const SET_USERS_TOTAL_COUNT = "SET-USERS-TOTAL-COUNT";
const IS_FETCHING = "IS-FETCHING";
const FOLLOW_IN_PROGRESS = "FOLLOW-IN-PROGRESS";

let initiaState = {
  users: [],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  followInProgress: [],
};

const usersReducer = (state = initiaState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users,action.userID,'id', {followed: true} )
        // users: state.users.map((u) => {
        //   if (u.id === action.userID) {
        //     return {
        //       ...u,
        //       followed: true,
        //     };
        //   }
        //   debugger;
        //   return u;
        // }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: updateObjectInArray(state.users,action.userID,'id', {followed: false} )
        // users: state.users.map((u) => {
        //   if (u.id === action.userID) {
        //     return {
        //       ...u,
        //       followed: false,
        //     };
        //   }
        //   return u;
        // }),
      };
    case SET_USERS: {
      return {
        ...state,
        users: [...action.users],
      };
    }

    case SET_CURRENT_PAGE: {
      return {
        ...state,
        currentPage: action.currentPage,
      };
    }
    case SET_USERS_TOTAL_COUNT: {
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    }
    case IS_FETCHING: {
      return {
        ...state,
        isFetching: action.isFetching,
      };
    }

    case FOLLOW_IN_PROGRESS: {
      return {
        ...state,
        followInProgress: action.followStatus
          ? [...state.followInProgress, action.userId]
          : state.followInProgress.filter((id) => id !== action.userId),
      };
    }

    default:
      return state;
  }
};

export const followActionCreator = (userID) => ({
  type: FOLLOW,
  userID,
});
export const unfollowActionCreator = (userID) => ({
  type: UNFOLLOW,
  userID,
});
export const setUsersActionCreator = (users) => ({
  type: SET_USERS,
  users,
});
export const setCurrentPageActionCreator = (currentPage) => ({
  type: SET_CURRENT_PAGE,
  currentPage,
});
export const setUsersTotalCountActionCreator = (totalCount) => ({
  type: SET_USERS_TOTAL_COUNT,
  totalCount,
});
export const isFetchingActionCreator = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});
export const followInProgressActionCreator = (followStatus, userId) => ({
  type: FOLLOW_IN_PROGRESS,
  followStatus,
  userId,
});

export const getUsersThunkCreator = (currentPage, pageSize) => {
  return async (dispatch) => {
    dispatch(isFetchingActionCreator(true));
    const response = await usersAPI.getUsers(currentPage, pageSize);
    dispatch(isFetchingActionCreator(false));
    dispatch(setUsersActionCreator(response.items));
    dispatch(setUsersTotalCountActionCreator(response.totalCount));
  };
};
export const followThunkCreator = (id) => {
  return async (dispatch) => {
    dispatch(followInProgressActionCreator(true, id));
    const response = await usersAPI.postStatus(id);
    if (response.resultCode === 0) {
      dispatch(followActionCreator(id));
    }
    dispatch(followInProgressActionCreator(false, id));
  };
};
export const unfollowThunkCreator = (id) => {
  return async (dispatch) => {
    dispatch(followInProgressActionCreator(true, id));
    const response = await usersAPI.deleteStatus(id);
    if (response.resultCode === 0) {
      dispatch(unfollowActionCreator(id));
    }
    dispatch(followInProgressActionCreator(false, id));
  };
};

export default usersReducer;
