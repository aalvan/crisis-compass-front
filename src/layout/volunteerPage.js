import Header from '../component/header';
import PresentationCard from '../component/card';

function Volunteer(props){
    return(
        <div className="VolunteerPage">
        <Header/>
        <body className="App-body">
        <PresentationCard id="1"/>
        </body>
      </div>
        )
}

export default Volunteer