import { stopSubmit } from "redux-form";
import { profileAPI } from "../API/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET-USER-PROFILE";
const SET_USER_STATUS = "SET-USER-STATUS";
const DELETE_POST = "DELETE-POST";
const SAVE_PHOTO = "SAVE-PHOTO";

let initialState = {
  postData: [
    {
      id: 1,
      message: "Привет, как дела?",
      likesCounter: 1000,
    },
    {
      id: 2,
      message: "Привет Мир! ",
      likesCounter: 200,
    },
  ],
  profile: null,
  status: "",
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.postData.length + 1,
        message: action.myPostText,
        likesCounter: 0,
      };

      return {
        ...state,
        postData: [...state.postData, newPost],
      };
    }

    case DELETE_POST: {
      return {
        ...state,
        postData: state.postData.filter((p) => p.id !== action.postId),
      };
    }

    case SET_USER_PROFILE: {
      return {
        ...state,
        profile: action.profile,
      };
    }

    case SET_USER_STATUS: {
      return {
        ...state,
        status: action.status,
      };
    }
    case SAVE_PHOTO: {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos },
      };
    }

    default:
      return state;
  }
};

export const addPostActionCreator = (myPostText) => ({
  type: "ADD-POST",
  myPostText,
});

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  profile,
});
export const setUserStatusActionCreator = (status) => ({
  type: SET_USER_STATUS,
  status,
});
export const deletePostActionCreator = (postId) => ({
  type: DELETE_POST,
  postId,
});
export const savePhotoSuccessActionCreator = (photos) => ({
  type: SAVE_PHOTO,
  photos,
});

export const getProfileThunkCreator = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getProfile(userId);
    dispatch(setUserProfile(response.data));
  };
};
export const getStatusThunkCreator = (userId) => {
  return async (dispatch) => {
    const response = await profileAPI.getStatus(userId);
    dispatch(setUserStatusActionCreator(response.data));
  };
};
export const updateStatusThunkCreator = (status) => {
  return async (dispatch) => {
    const response = await profileAPI.updateStatus(status);
    if (response.data.resultCode === 0) {
      dispatch(setUserStatusActionCreator(status));
    }
  };
};

export const savePhotoThunkCreator = (file) => {
  return async (dispatch) => {
    const response = await profileAPI.savePhoto(file);
    if (response.data.resultCode === 0) {
      dispatch(savePhotoSuccessActionCreator(response.data.data.photos));
    }
  };
};

export const saveProfileThunkCreator = (profile) => {
  debugger;
  return async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await profileAPI.saveProfile(profile);
    debugger;
    if (response.data.resultCode === 0) {
      dispatch(getProfileThunkCreator(userId));
    } else {
      dispatch(
        stopSubmit("edit-profile", { _error: response.data.messages[0] })
      );
      return Promise.reject(response.data.messages[0]);
    }
  };
};
export default profileReducer;
