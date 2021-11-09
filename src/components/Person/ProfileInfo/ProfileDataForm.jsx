import { reduxForm } from "redux-form";
import {
  createField,
  Input,
  Textarea,
} from "../../common/FormsControls/FormsControls";
import "./../Person.scss";

const PersonDataForm = ({ handleSubmit, profile, error }) => {
  return (
    <div>
      <div className="person__info">
        <form onSubmit={handleSubmit}>
          {error && <div className="form__summaryError">{error}</div>}
          <div className="person__name--container">
            <h3 className="person__name">
              Имя: {createField("Имя", "fullName", [], Input)}
            </h3>
            <button>Сохранить</button>
          </div>

          <div className="person__line"></div>
          <p>
            Ищу работу:
            {createField("", "lookingForAJob", [], Input, { type: "checkbox" })}
          </p>
          <p>
            Мои умения:{" "}
            {createField(
              "Мои умения",
              "lookingForAJobDescription",
              [],
              Textarea
            )}
          </p>

          <p>
            Информация обо мне:{" "}
            {createField("Информация обо мне", "aboutMe", [], Textarea)}
          </p>
          <div className="person__contacts">
            <h5>Контакты</h5>
            <ul>
              {Object.keys(profile.contacts).map((key) => {
                return (
                  <div key={key}>
                    <p>
                      {key}: {createField(key, "contacts." + key, [], Input)}
                    </p>
                  </div>
                );
              })}
            </ul>
          </div>
        </form>
      </div>
    </div>
  );
};

const ProfileDataReduxForm = reduxForm({ form: "edit-profile" })(
  PersonDataForm
);

export default ProfileDataReduxForm;
