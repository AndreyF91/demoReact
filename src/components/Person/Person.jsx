import MyPostContainer from "./MyPosts/MyPostContainer";
import "./Person.scss";
import PersonInfo from "./ProfileInfo/ProfileInfo";

const Person = (props) => {
  return (
    <section className="person">
      <PersonInfo
        profile={props.profile}
        status={props.status}
        updateStatus={props.updateStatus}
        isOwner={props.isOwner}
        savePhoto={props.savePhoto}
        saveProfile={props.saveProfile}
      />
      <MyPostContainer />
    </section>
  );
};

export default Person;
