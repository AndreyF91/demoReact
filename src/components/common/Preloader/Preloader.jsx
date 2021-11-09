import loading from '../../../assets/img/loading.gif';
import './Preloader.scss'

const Preloader = (props) => {
    return(
        <img className="preloader" src={loading} alt="Загрузка..."/> 
    )
}


export default Preloader;