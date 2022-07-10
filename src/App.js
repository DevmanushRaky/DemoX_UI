import React from 'react';
import './App.css';
import Navbar from "./components/Navbar"; 
import Home from './components/Home'
import AddMusic from './components/AddMusic';
import { BrowserRouter , Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
   <Navbar/>
   <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>  
      <Route exact path='/AddMusicHere' element={<AddMusic/>}/>  
    </Routes>
   </BrowserRouter>
    
    </>
  );
}

export default App;
