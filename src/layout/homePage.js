import MainPage from '../component/index';
import ControlLocation from '../component/adminControlLocation';

function HomePage(props){
    return(
        <div className="MainPage">
        <MainPage/>
        <ControlLocation/>
      </div>
        )
}

export default HomePage