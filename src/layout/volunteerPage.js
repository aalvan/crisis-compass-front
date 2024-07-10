import React, { useContext } from 'react';
import PresentationCard from '../component/card';
import { UserContext } from '../component/UserContext';

function Volunteer() {
    const { user } = useContext(UserContext);

    return (
        <div className="VolunteerPage">
            <div className="App-body">
                <PresentationCard id={user ? user.id : null} />
            </div>
        </div>
    );
}
//id="1"
export default Volunteer