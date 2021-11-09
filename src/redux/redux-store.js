import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import profileReducer from "./profile-reducer";
import messageReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messageReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

// let store = createStore(reducers, applyMiddleware(thunkMiddleware));

let store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(thunkMiddleware))
);

window.store = store;

export default store;
