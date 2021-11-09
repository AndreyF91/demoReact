import '../Dialogs.scss';

const Message = (props) => {
    return (
        <div className="dialogs__content--item">
            <div className="dialogs__content--avatar">
                <p>{props.userName}</p>
                <img src="https://i.pinimg.com/originals/ff/a0/9a/ffa09aec412db3f54deadf1b3781de2a.png" alt="" className="avatar" />
            </div>
            <div className="dialogs__content--textarea">
                <p>{props.message}</p>
            </div>
        </div>
    )
}

export default Message;