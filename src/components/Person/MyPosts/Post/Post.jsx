import '../../Person.scss';

const Post = (props) => {
    return (
        <div className="person__posts--area--item">
  
                <div className="avatar"></div>
                <p className="post__text">{props.message}</p>
       
            <div className="post__likes"> Понравилось <span>{props.likesCounter}</span> </div>
        </div>
    )
}

export default Post;
