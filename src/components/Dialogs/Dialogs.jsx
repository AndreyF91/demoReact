import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import Dialog from "./Dialog/Dialog";
import "./Dialogs.scss";
import Message from "./Message/Message";

const Dialogs = (props) => {
  let state = props.messagesPage;

  let dialogsElements = state.dialogsData.map((el) => (
    <Dialog name={el.name} id={el.id} />
  ));
  let messageElement = state.messagesData.map((el) => (
    <Message userName="Имя" message={el.message} />
  ));

  let addMessage = (values) => {
    props.addMessage(values.newMessage);
    values.newMessage="";
  };

  return (
    <div className="dialogs">
      <h2>Cообщения</h2>
      <div className="dialogs__wrapper">
        <div className="dialogs__messages">{dialogsElements}</div>
        <div className="dialogs__line"></div>
        <div className="dialogs__inner">
          <div className="dialogs__content">{messageElement}</div>
          <DialogsFormRedux onSubmit={addMessage} />
        </div>
      </div>
    </div>
  );
};


const maxLength = maxLengthCreator(30);

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit} className="dialogs__textarea">
      <Field
        component={Input}
        type="text"
        autoComplete="off"
        name={"newMessage"}
        className="dialogs__textarea--text"
        placeholder="Напишите сообщение"
        validate={[maxLength]}
      />
      <button className="dialogs__textarea--btn"> Отправить</button>
    </form>
  );
};

const DialogsFormRedux = reduxForm({ form: "dialogsDialogsForm" })(DialogsForm);

export default Dialogs;
