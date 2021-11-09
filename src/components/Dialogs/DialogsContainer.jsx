import { connect } from "react-redux";
import { compose } from "redux";
import { AuthRedirect } from "../../hoc/AuthRedirect";
import {
  addMessageActionCreator,
} from "../../redux/messages-reducer";
import Dialogs from "./Dialogs";
import "./Dialogs.scss";

// const DialogsContainer = (props) => {
//     let state = props.store.getState().messagesPage;

//     let onMessageChange = (text) => {
//         props.store.dispatch(updateNewMessageTextActionCreator(text));
//     }

//     let addMessage = () => {
//         props.store.dispatch(addMessageActionCreator());
//     }

//     return (
//         <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} messagesPage={state}
//         />
//     )
// }

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    addMessage: (newMessage) => {
      dispatch(addMessageActionCreator(newMessage));
    },
  };
};

// let AuthRedirectComponent = AuthRedirect(Dialogs);

// // let mapStateToPropsForRedirect = (state) => ({
// //   isAuth: state.auth.isAuth,
// // });
// // AuthRedirectComponent = connect(mapStateToPropsForRedirect)(
// //   AuthRedirectComponent
// // );
// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  AuthRedirect
)(Dialogs);
