import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Edit } from "../Service/api";
import axios from "axios";
const Users = (props) => {
const [user, setUser] = useState({    
    Name: "",
    Username: "",
    Email: ""
});
//const {Name,Username,Email}=user;
//const url=`https://localhost:44397/api/User/api/getkeys/${Id}`
const { Id } = useParams();
    
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
      

    return(
        <div className="container py-4">
        <h1 className="display-3">User Id: {Id}</h1>
        <hr />
        
    <div className="container">
    <div className="w-75 mx-auto shadow p-5 ">
          <ul className="list-group w-50">
          
        <li className="list-group-item">Name: {user.Name}</li>
          <li className="list-group-item">User Name: {user.Username}</li>
          <li className="list-group-item">Email: {user.Email}</li>
          <Link className="btn btn-primary" to="/">
          Back To Home
        </Link>
        <Link  to={`editusers/${user.Id}`} className="btn btn-warning btn-block margin:3" >Edit
        </Link>
        </ul>
        </div>
      </div>
      </div>
    )
}

export default Users;