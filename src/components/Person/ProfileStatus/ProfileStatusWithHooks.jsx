import React, { useState } from "react";
import { useEffect } from "react";
import "./../Person.scss";

const ProfileStatusWithHooks = (props) => {
  let [editMode, setEditMode] = useState(true);
  let [status, setStatus] = useState(props.status);

  useEffect(() => {
    setStatus(props.status);
  }, [props.status]);

  const changeMode = () => {
    setEditMode(false);
  };

  const unChangeMode = () => {
    setEditMode(true);
    props.updateStatus(status);
  };

  const onStatusChange = (e) => {
    setStatus(e.target.value);
  };

  const focusInput = (e) => {
    e.target.select();
  };

  return (
    <div className="person__status">
      {editMode ? (
        <span onClick={changeMode}>"{props.status || "Введите статус"}"</span>
      ) : (
        <input
          className="person__status--input"
          value={status}
          onChange={onStatusChange}
          onBlur={unChangeMode}
          onFocus={focusInput}
          autoFocus={true}
          type="text"
        />
      )}
    </div>
  );
};

export default ProfileStatusWithHooks;
