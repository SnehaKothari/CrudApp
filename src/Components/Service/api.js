import axios from 'axios';


//const url='http://localhost:3003/users';
const url='https://localhost:44397/api/User/api';
//const url='https://localhost:44397/api/getallkeys';
//const response=<T>(response:axios</T>)=>response.data


export const getUsers=async()=>{
    return await axios.get(`${url}/getallkeys`);
}

export const Adduser=async(user)=>{
    return await axios.post(`${url}/insertkeys`,user);
}

export const Edit=async(Id)=>{
    return await axios.get(`${url}/getkeys/${Id}`);
} 

export const userUpdate=async (Id,Name,Username,Email,user)=>{
    return await axios.put(`${url}/updatekeys?Id=${Id}&Name=${Name}&Username=${Username}&Email=${Email}`,user);
}

export const deleteUser=async(Id)=>{
    return await axios.delete(`${url}/deletekeys/${Id}`)
}
