import React, { useState } from 'react'
import { Adduser,userUpdate } from '../Service/api'
import {Link,useNavigate,useParams} from 'react-router-dom'

const AddUsers=()=>{
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

  const onSubmit=async()=>{
    await Adduser(user);
   history('/')
  }
  

  
 

  return (
    <div className="container">
    <div className="w-75 mx-auto shadow p-5">
      <h2 className="text-center mb-4">Add A User</h2>
      <form onSubmit={e => onSubmit(e)}>
       

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
    
    
          <Link to="./"><button className='my-2 btn btn-primary' onClick={()=>onSubmit()}>Add User</button> </Link>
        
    </form>
    </div>
    </div>
  )
}

export default AddUsers;
