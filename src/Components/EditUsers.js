import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Edit,userUpdate } from "../Service/api";

const EditUsers=()=>{
    const history = useNavigate();
    const { id } = useParams();
    const [user, setUser] = useState({
      
        name: "",
      username: "",
      email: "",
      
    });
  
    const {name, username, email } = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
    const loadUserdata = async () => {
        const response = await Edit(id);
        setUser(response.data)
      }
      useEffect(() =>loadUserdata(),[]);
    
      const addDetail = async () => {
        await userUpdate(id, user);
        history('/')
      }
  
    
    return (
      <div className="container">
        <div className="w-75 mx-auto shadow p-5">
          <h2 className="text-center mb-4">Edit A User</h2>
          <form onSubmit={e => addDetail(e)}>
          
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Name"
                name="name"
                value={name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="username"
                value={username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="email"
                value={email}
                onChange={e => onInputChange(e)}
              />
            </div>
            
          <Link to={'./'}><button className="btn btn-warning btn-block margin:3" onClick={()=>{addDetail(user.id)}}>Update User</button></Link>
          
          </form>
        </div>
      </div>
    )
}

export default EditUsers;