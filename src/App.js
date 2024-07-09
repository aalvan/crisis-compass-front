import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./layout/homePage";
import Volunteer from "./layout/volunteerPage";
import Header from "./component/header.js"; 
import { UserProvider } from "./component/UserContext.js"; 

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Header /> {}
                <Routes>
                    <Route path="/" element={<HomePage/>} />
                    <Route path="/volunteers" element={<Volunteer />} />
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
