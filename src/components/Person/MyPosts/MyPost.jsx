import "../Person.scss";
import Post from "./Post/Post";
import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "../../../utils/validators/validators";
import { Input } from "../../common/FormsControls/FormsControls";

const MyPost = (props) => {
  let addPost = (values) => {
    props.addPost(values.myPostText);
    values.myPostText = "";
  };

  let postElement = props.postData.map((el) => (
    <Post likesCounter={el.likesCounter} message={el.message} key={el.id} />
  ));
  return (
    <div className="person__posts">
      <h3>Мои новости</h3>
      <ReduxMyPostForm onSubmit={addPost} />
      <div className="person__posts--area">{postElement}</div>
    </div>
  );
};
const maxLength = maxLengthCreator(20);

const MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field
        component={Input}
        name={"myPostText"}
        autoComplete="off"
        className="person__posts--textarea"
        validate={[maxLength]}
        type="text"
        placeholder="Что нового?"
      />
      <button className="person__posts--btn">Отправить</button>
    </form>
  );
};

const ReduxMyPostForm = reduxForm({
  form: "myPost",
})(MyPostForm);

export default MyPost;
