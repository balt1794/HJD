import React from "react";
import Jobs from "./pages/jobs"
import Form from "./pages/form"
import {Router, Routes, Route} from "react-router-dom"
import Navbar from "./components/Navbar";


export default () => {
  return (
    <div className="App">
  
      
      <Routes>
        <Route exact path='/' element={<Jobs/>} />
        <Route exact path='/form' element={<Form/>} />
      </Routes>
      
    </div>
  );
};
