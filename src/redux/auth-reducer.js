import { stopSubmit } from "redux-form";
import { authAPI, profileAPI, securityAPI } from "../API/api";

const SET_USER_DATA = "SET-USER-DATA";
const SET_PROFILE_DATA = "SET-PROFILE-DATA";
const SET_CAPTCHA_URL = "SET-CAPTCHA-URL";

let initialState = {
  userId: null,
  email: null,
  login: null,
  photos: null,
  isAuth: false,
  captchaUrl: null,
};

debugger

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
      };

    case SET_PROFILE_DATA:
      return {
        ...state,
        photos: action.photos,
      };

    case SET_CAPTCHA_URL:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};

export const setUserDataActionCreator = (userId, email, login, isAuth) => ({
  type: SET_USER_DATA,
  data: { userId, email, login, isAuth },
});
export const setProfileDataActionCreator = (photos) => ({
  type: SET_PROFILE_DATA,
  photos,
});
export const setCaptchaUrlActionCreator = (captchaUrl) => ({
  type: SET_CAPTCHA_URL,
  payload: { captchaUrl },
});

export const authMeThunkCreator = () => {
  return async (dispatch) => {
    const response = await authAPI.getAuth();

    if (response.data.resultCode === 0) {
      let { id, email, login } = response.data.data;
      dispatch(setUserDataActionCreator(id, email, login, true));
      profileAPI.getProfile(id).then((response_1) => {
        dispatch(setProfileDataActionCreator(response_1.data.photos));
      });
    }
  };
};

export const loginMeThunkCreator = (email, password, rememberMe, captcha) => {
  return async (dispatch) => {
    const response = await authAPI.logIn(email, password, rememberMe, captcha);
    if (response.data.resultCode === 0) {
      dispatch(authMeThunkCreator());
    } else {
      if (response.data.resultCode === 10) {
        dispatch(getCaptchaUrlThunkCreator());
      }
      let message =
        response.data.messages.length > 0
          ? response.data.messages[0]
          : "Какая-то ошибка";
      dispatch(stopSubmit("Login", { _error: message }));
    }
  };
};
export const logoutMeThunkCreator = () => {
  return async (dispatch) => {
    const response = await authAPI.logOut();
    if (response.data.resultCode === 0) {
      dispatch(setUserDataActionCreator(null, null, null, false));
      dispatch(setProfileDataActionCreator(null));
    }
  };
};

export const getCaptchaUrlThunkCreator = () => {
  return async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    const captchaUrl = response.data.url;

    dispatch(setCaptchaUrlActionCreator(captchaUrl));
  };
};

export default authReducer;
