import { authMeThunkCreator } from "./auth-reducer";

const SET_INITIALIZED = "SET-INITIALIZED";

let initialState = {
  initialized: false,
};

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_INITIALIZED:
      return {
        ...state,
        initialized: true,
      };

    default:
      return state;
  }
};

export const setInitializedActionCreator = () => ({ type: SET_INITIALIZED });

export const initializeThunkCreator = () => (dispatch) => {
  let promise = dispatch(authMeThunkCreator());
  Promise.all([promise]).then(() => {
    dispatch(setInitializedActionCreator());
  });
};

export default appReducer;
