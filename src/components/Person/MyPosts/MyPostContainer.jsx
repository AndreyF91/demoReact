import { connect } from "react-redux";
import { addPostActionCreator } from "../../../redux/profile-reducer";
import MyPost from "./MyPost";

// const MyPostContainer = (props) => {
//     let state = props.store.getState();

//     let onPostChange = (text) => {
//         props.store.dispatch(updateNewPostTextActionCreator(text));

//     }
//     let addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     }

//     return (
//         <MyPost updateNewPostText={onPostChange} addPost={addPost} postData={state.profilePage.postData} newPostText={state.profilePage.newPostText} />
//     )
// }

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: (myPostText) => {
      dispatch(addPostActionCreator(myPostText));
    },
  };
};

const MyPostContainer = connect(mapStateToProps, mapDispatchToProps)(MyPost);

export default MyPostContainer;
