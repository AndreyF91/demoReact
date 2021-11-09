
import './Sidebar.scss';
import { connect } from 'react-redux';
import Sidebar from './Sidebar';



let mapStateToProps = (state) => {
    return {
       friend: state.sidebar.friend
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
    }
}


const SidebarContainer = connect(mapStateToProps, mapDispatchToProps)(Sidebar); 

export default SidebarContainer;