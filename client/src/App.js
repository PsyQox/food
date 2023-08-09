import './App.css';
import React from 'react';
import Landing from './views/Landing/Landing';
import { Routes,Route } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Home from './views/Home/Home';
import DetailPage from './views/DetailPage/DetailPage';
import Navbar from './components/Navbar/Navbar';
import Form from './components/Form/Form';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      {location.pathname !== "/" && <Navbar />}
      <Routes>
        <Route path='/' element={<Landing />}/>
        <Route path='/home' element={<Home />}/>
        <Route path='/detail/:id' element={<DetailPage />}/>
        <Route path='/form' element={<Form />}/>
      </Routes>
    </div>
  );
}

export default App;
