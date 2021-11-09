import { NavLink } from 'react-router-dom';
import '../Dialogs.scss';

const Dialog = (props) => {
    let userId = "/dialogs/" + props.id;
    let userName = props.name;

    return (
        <div className="dialogs__messages--item">
            <NavLink to={userId}>{userName}</NavLink>
        </div>
    )
}

export default Dialog;