import './App.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./layout/homePage";
import Volunteer from "./layout/volunteerPage";

function App() {
    function handleLogin(a) {
        console.log("Logged in", a);
      }
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/volunteers" element={<Volunteer />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
