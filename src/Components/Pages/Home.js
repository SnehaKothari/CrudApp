import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link,useParams } from "react-router-dom";
import { getUsers,deleteUser ,Edit} from "../Service/api";
import App from "../../App";

const Home = (props) => {
    const [users, setUser] = useState([]);
    useEffect(() => {
        loadUsers();
      }, []);

      const loadUsers=async()=>{
      const response=await getUsers();
      // const response=await axios.get('https://localhost:44397/api/User/api/getallkeys');
        setUser(response.data);
      }

      const deleteUserData=async(Id)=>{
        await deleteUser(Id);
       //await axios.delete('https://localhost:44397/api/deletekeys/{Id}');
        loadUsers();
      
      }
    
      const Users=(Id)=>{
        props.history.push({
          pathname:'/users/'+Id
        })
      }


  
    return(
        <div className="container">
      <div className="py-4">
        <h1>User Details</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Id</th>
              <th scope="col">Name</th>
              <th scope="col">User Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => {

                return(

                    <tr key={user.Id}>
                    <td>{user.Id}</td>
                    
                    <td>{user.Name}</td>
                    <td>{user.Username}</td>
                    <td>{user.Email}</td>
                    <td>
                    <Link to={`editusers/${user.Id}`}><button className='btn btn-primary' >Edit</button></Link>
          <button className='btn btn-danger mx-3' onClick={()=>{deleteUserData(user.Id)}}>Delete</button>
                    <Link  to={`users/${user.Id}`}><button className="btn btn-primary mr-2" >View</button>
                    </Link>

                    </td>
                  </tr>)
                }
            )
            }
              
          </tbody>
        </table>
      </div>
    </div>
    )
}

export default Home;