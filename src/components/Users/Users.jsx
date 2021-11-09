import "./Users.scss";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {
  // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  // let pages = [];
  // for (let i = 1; i <= pagesCount; i++) {
  //   pages.push(i);
  // }

  return (
    <section className="users">
      <h2 className="users__title">Пользователи</h2>
      <div className="users__counter">
        <Paginator
          currentPage={props.currentPage}
          onPageChanged={props.onPageChanged}
          totalItemsCount={props.totalUsersCount}
          pageSize={props.pageSize}
        />
      </div>
      <div className="users__item__wrapper">
        {props.users.map((el) => (
          <User
            key={el.id}
            user={el}
            users={props.users}
            followStatus={props.followStatus}
            unfollowThunk={props.unfollowThunk}
            followThunk={props.followThunk}
          />
        ))}
      </div>
    </section>
  );
};

export default Users;
