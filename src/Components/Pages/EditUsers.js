import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Edit,userUpdate } from "../Service/api";
import { Toast } from "bootstrap";

const EditUsers=(props)=>{
    const history = useNavigate();
    const { Id } = useParams();
    const [user, setUser] = useState({
      
        Name: "",
      Username: "",
      Email: "",
      
    });
  //const url=`https://localhost:44397/api/User/api/getkeys/${Id}`;
    const {Name, Username, Email } = user;
    const onInputChange = e => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };

    /*
    const loadUserdata = async () => {
        const response = await Edit(Id);
        setUser(response.data)
  }
     useEffect(() =>loadUserdata(),[]);
    */
  useEffect(()=>{
    if(Id){
      loadUserdata(Id)
    }
  },[Id]);
  const loadUserdata=async(Id)=>{
    const response=await axios.get(`https://localhost:44397/api/User/api/getkeys/${Id}`);
    if(response.status===200){
      setUser({...response.data[0]});
    }
  }
      const addDetail = async () => {
        await userUpdate(Id,Name,Username,Email);
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
                name="Name"
                value={Name}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Your Username"
                name="Username"
                value={Username}
                onChange={e => onInputChange(e)}
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Your E-mail Address"
                name="Email"
                value={Email}
                onChange={e => onInputChange(e)}
              />
            </div>
            
          <Link to={'/'}><button className="btn btn-warning btn-block margin:3" onClick={()=>{addDetail(user.Id,user.Name,user.Username,user.Email)}}>Update User</button></Link>
          
          </form>
        </div>
      </div>
    )
    }

export default EditUsers;