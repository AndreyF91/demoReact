import '../Sidebar.scss';

const Friend = (props) => {
    return (
        <div className="people__cell">
            <a href="/" className="people__cell--ava">
                <img src={props.friendAva} alt="" className="people__cell--img" />
            </a>
            <div className="people__cell--name">{props.friendName}</div>
        </div>
    )
}

export default Friend;