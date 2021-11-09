import { NavLink } from 'react-router-dom';
import Friend from './Friends/Friend';
import './Sidebar.scss';

const Sidebar = (props) => {

    let friendItem = props.friend.map(el => <Friend friendName={el.friendName} friendAva={el.friendAva} key={el.id} />)

    return (
        <div className="sidebar__wrapper">
            <nav className="sidebar">
                <ul className="sidebar__list">
                    <li className="sidebar__list--item"><NavLink className="sidebar__list--link" to="/Person">Профиль</NavLink></li>
                    <li className="sidebar__list--item"><NavLink className="sidebar__list--link" to="/Dialogs">Сообщения</NavLink></li>
                    <li className="sidebar__list--item"><NavLink className="sidebar__list--link" to="/News">Новости</NavLink></li>
                    <li className="sidebar__list--item"><NavLink className="sidebar__list--link" to="/Music">Музыка</NavLink></li>
                    <li className="sidebar__list--item"><NavLink className="sidebar__list--link" to="/Users">Пользователи</NavLink></li>
                    <li className="sidebar__list--item"><NavLink className="sidebar__list--link" to="/Settings">Настройки</NavLink></li>
                </ul>
            </nav>

            <div className="sidebar__friends">
                <div className="sidebar__title">
                    <h3>Друзья</h3>
                    <span>{props.friend.length}</span>
                </div>

                <div className="sidebar__friends--line"></div>
                <div className="sidebar__friends--inner">
                    <div className="people__row">
                        {friendItem}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Sidebar;