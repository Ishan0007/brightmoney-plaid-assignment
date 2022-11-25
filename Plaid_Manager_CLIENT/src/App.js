import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import LoginComponent from './components/LoginComponent';
import RegisterComponent from './components/RegisterComponent';
import { Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Hero />} />
        <Route path="/login" element={<LoginComponent />} />
        <Route path="/register" element={<RegisterComponent />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
