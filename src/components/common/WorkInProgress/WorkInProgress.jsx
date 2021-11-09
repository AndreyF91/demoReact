import React from "react";
import workImg from "../../../assets/img/work_progress.gif";
import "./WorkInProgress.scss"

const WorkInProgress = (props) => {
  return (
    <div className="workInProgress_inner">
      <img className="workInProgress" src={workImg} alt="Заглушка" />
    </div>
  );
};

export default WorkInProgress;
