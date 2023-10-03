import './App.css';
import Home from "./pages/Home"
import Login from "./pages/Login"
import Header from "./components/Header"
import Footer from './components/Footer';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
