import React, { useState } from 'react'
import { Adduser,userUpdate } from '../Service/api'
import {Link,useNavigate,useParams} from 'react-router-dom'
import axios from 'axios';

const AddUsers=(props)=>{
    const history = useNavigate();
    const { Id } = useParams();
    const [user, setUser] = useState({
      
    Name: "",
    Username: "",
    Email: "",
      
    });
  
   //const url='https://localhost:44397/api/insertkeys';
    const {Name, Username, Email } = user;

    const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
    };

  const onSubmit=async()=>{
  await Adduser(user);
   history('/')
  }

/*const onSubmit=(e)=>{
  e.preventDefault();
  const data={Name:user.Name,Username:user.Username,Email:user.Email} ;
  axios.post(url,data).then((result)=>{props.history('/')});

}*/
  

  return (
  <div className="container">
  <div className="w-75 mx-auto shadow p-5">
  <h2 className="text-center mb-4">Add A User</h2>
  <form onSubmit={e => onSubmit(e)}>
       

       <div className="form-group">
            <input type="text"
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
    
    
<Link to={'/'}><button className='my-2 btn btn-primary' onClick={()=>onSubmit()}>Add User</button> </Link>
        
    </form>
    </div>
    </div>
  )
}

export default AddUsers;
