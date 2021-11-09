import Preloader from "../../common/Preloader/Preloader";
import "../Person.scss";
import userPhoto from "../../../assets/img/userDF.png";
// import ProfileStatus from '../ProfileStatus/ProfileStatus';
import ProfileStatusWithHooks from "../ProfileStatus/ProfileStatusWithHooks";
import { useState } from "react";
import ProfileDataReduxForm from "./ProfileDataForm";

const PersonInfo = (props) => {
  let [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }

  const mainPhotoSelection = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };

  return (
    <div>
      <div className="person__header"></div>
      <div className="person__avatar">
        <label>
          <img
            className="person__avatar--img"
            src={props.profile.photos.large || userPhoto}
            alt="Аватар"
          />
          {props.isOwner && (
            <input type={"file"} onChange={mainPhotoSelection} hidden />
          )}
        </label>
      </div>
      <div className="person__status--container">
        <ProfileStatusWithHooks
          status={props.status}
          updateStatus={props.updateStatus}
        />
      </div>

      {editMode ? (
        <ProfileDataReduxForm
          initialValues={props.profile}
          onSubmit={onSubmit}
          profile={props.profile}
        />
      ) : (
        <PersonData
          profile={props.profile}
          isOwner={props.isOwner}
          setEditMode={() => {
            setEditMode(true);
          }}
        />
      )}
    </div>
  );
};
const PersonData = (props) => {
  return (
    <div className="person__info">
      <div className="person__name--container">
        <h3 className="person__name">{props.profile.fullName}</h3>
        {props.isOwner && (
          <button onClick={props.setEditMode}>Редактировать</button>
        )}
      </div>
      <div className="person__line"></div>
      <p>
        <span>Ищу работу: </span>
        {props.profile.lookingForAJob ? "Да" : "Нет"}
      </p>
      {props.profile.lookingForAJob && (
        <p>
          <span>Мои умения: </span>
          {props.profile.lookingForAJobDescription}
        </p>
      )}
      <p>
        <span>Информация обо мне: </span>
        {props.profile.aboutMe}
      </p>
      <div className="person__contacts">
        <h5>Контакты</h5>
        <ul>
          {Object.keys(props.profile.contacts).map((key) => {
            return (
              <Contact
                key={key}
                contactTitle={key}
                contactValue={props.profile.contacts[key]}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export const Contact = (props) => {
  return (
    <li>
      <span>{props.contactTitle}: </span> 
      {props.contactValue ? props.contactValue : "Не указан"}
    </li>
  );
};

export default PersonInfo;
