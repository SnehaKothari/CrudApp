import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import './index.css';
import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Navbar from "./Components/Navbar";
import Home from "./Components/Pages/Home";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import NotFound from "./Components/NotFound";
import AddUsers from "./Components/Pages/AddUsers";
import Users from "./Components/Pages/Users";
import EditUsers from "./Components/Pages/EditUsers";

function App() {
 
  return (
    <BrowserRouter>
    
    <div className="App">
    <Navbar/>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/contact' element={<Contact/>}/>
    <Route exact path='/addUsers/' element={<AddUsers/>}/>
    <Route exact path='/users/:Id' element={<Users/>}/>
    <Route exact path="/editusers/:Id" element={<EditUsers/>}/>
    <Route exact path="/users/:Id/editusers/:Id" element={<EditUsers/>}/>
    </Routes>
    
    </div>
    

    </BrowserRouter>
    

    
    

    
  );
}

export default App;
