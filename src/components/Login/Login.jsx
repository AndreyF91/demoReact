import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import { loginMeThunkCreator } from "../../redux/auth-reducer";
import {
  email,
  maxLengthCreator,
  required,
} from "../../utils/validators/validators";
import { Input, createField } from "../common/FormsControls/FormsControls";
import "./login.scss";

const Login = (props) => {
  const onSubmit = (formData) => {
    let email = formData.login;
    let password = formData.password;
    let rememberMe = formData.rememberMe;
    let captcha = formData.captcha
    props.login(email, password, rememberMe, captcha);
  };

  if (props.isAuth) {
    return <Redirect to={"/Person"} />;
  }

  return (
    <div className="login">
      <h2>Авторизация</h2>
      <ReduxLoginForm captchaUrl={props.captchaUrl} onSubmit={onSubmit} />
    </div>
  );
};

const maxLength = maxLengthCreator(20);

const LoginForm = ({handleSubmit, error, captchaUrl  }) => {
  return (
    <form className="login__form" onSubmit={handleSubmit}>
      <Field
        className="login__form--item"
        autoComplete="off"
        type="text"
        name={"login"}
        placeholder="Email-адрес"
        component={Input}
        validate={[required, maxLength, email]}
      />
      <Field
        className="login__form--item"
        type="password"
        name={"password"}
        placeholder="Пароль"
        component={Input}
        validate={[required, maxLength]}
      />
      <div className="login__remember">
        <Field type="checkbox" name={"rememberMe"} component={Input} />
        <p>Запомнить меня</p>
      </div>

      {error && <div className="form__summaryError">{error}</div>}    
      { captchaUrl && createField('введите каптчу', 'captcha', [required], Input, {},  "login__form--item")} 
      { captchaUrl && <img className={"login__captcha"} src={captchaUrl} alt="" />} 
     
      <button className="login__btn">Войти</button>
      
    </form>
  );
};

const ReduxLoginForm = reduxForm({
  form: "Login",
})(LoginForm);

const mapStateToProps = (state) => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login: loginMeThunkCreator })(Login);
