import Header from '../component/header';
import MainPage from '../component/index';
import ControlLocation from '../component/adminControlLocation';

function HomePage(props){
    return(
        <div className="MainPage">
        <Header/>
        <MainPage/>
        <ControlLocation/>
      </div>
        )
}

export default HomePage