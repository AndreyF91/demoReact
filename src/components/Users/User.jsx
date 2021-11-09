import userPhoto from "../../assets/img/userDF.png";
import { NavLink } from "react-router-dom";

const User = (props) => {
  return (
    <div className="users__item">
      <div className="users__item--left">
        <NavLink to={"/Person/" + props.user.id}>
          <a href="/" className="users__link">
            <img
              className="users__item--ava"
              src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
              alt=""
            />
          </a>
        </NavLink>
        {props.user.followed ? (
          <button
            disabled={props.followStatus.some((id) => id === props.user.id)}
            onClick={() => {
              props.unfollowThunk(props.user.id);
            }}
          >
            Отписаться
          </button>
        ) : (
          <button
            disabled={props.followStatus.some((id) => id === props.user.id)}
            onClick={() => {
              props.followThunk(props.user.id);
              debugger;
            }}
          >
            Подписаться
          </button>
        )}
      </div>
      <div className="users__item--info">
        <div className="users__item--info--top">
          <div className="users__item--info--name">
            <p>{props.user.name}</p>
          </div>
          <div className="users__item--info--location">
            {"страна"}, {"город"}
          </div>
        </div>
        <div className="users__item--info--status">
          {props.user.status === null ? "Статуса нет" : props.user.status}
        </div>
      </div>
    </div>
  );
};

export default User;
