import "./Header.scss";
import { NavLink } from "react-router-dom";
import userAva from "../../assets/img/userDF.png";
import logOutImg from "../../assets/img/logout.png";

const Header = (props) => {
  debugger;
  return (
    <header className="header">
      <div className="header__inner">
        <a href="/">
          <img
            className="header__logo"
            src="https://image.flaticon.com/icons/png/128/187/187902.png"
            alt="logo"
          />
        </a>
        <div className="header__login">
          {props.isAuth ? (
            props.login
          ) : (
            <NavLink to={"/login"}>Войдите</NavLink>
          )}
          <div className="header__ava">
            <img
              className="header__ava--login"
              src={!props.userAva ? userAva : props.userAva.small}
              alt="userAva"
            />
          </div>
          {props.isAuth && (
            <img
              onDoubleClick={props.logOut}
              className="header__ava--logout"
              src={logOutImg}
              alt="logout"
            />
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
