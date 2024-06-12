import './App.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./layout/homePage";
import RegisterForm from "./layout/registerForm";
import Volunteer from "./layout/volunteerPage";

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>}>
                  <Route path="/register-form" element={<RegisterForm />} />
              </Route>
              <Route path="/volunteers" element={<Volunteer />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
