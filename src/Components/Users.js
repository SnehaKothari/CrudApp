import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Edit } from "../Service/api";

const Users = () => {
    const [user, setUser] = useState({
      
        name: "",
      username: "",
      email: ""
    });
    const { id } = useParams();
    useEffect(() => {
      getAllUsers();
    }, []);

    const getAllUsers=async()=>{
        const response=await Edit(id);
       
        setUser(response.data);
      }
      

    return(
        <div className="container py-4">
       
        <h1 className="display-3">User Id: {id}</h1>
        <hr />
        
        <div className="container">
    <div className="w-75 mx-auto shadow p-5 ">
    <ul className="list-group w-50">
   
        <li className="list-group-item">Name: {user.name}</li>
          <li className="list-group-item">User Name: {user.username}</li>
          <li className="list-group-item">Email: {user.email}</li>
          <Link className="btn btn-primary" to="/">
          Back To Home
        </Link>
        <Link className="btn btn-warning btn-block margin:3" to={`editusers/${user.id}`}>
          Edit
        </Link>
        
       
        </ul>
        
        </div>
      </div>
      </div>
    )
}

export default Users;