import './App.css';

import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./layout/homePage";
import RegisterForm from "./layout/registerForm";
import Volunteer from "./layout/volunteerPage";
import Login from './layout/login';

function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/register-form" element={<RegisterForm />} />
              <Route path="/volunteers" element={<Volunteer />} />
              <Route path="/login" element={<Login />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App;
