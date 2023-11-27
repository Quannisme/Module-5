import axios from "axios";

export const getAll = async()=>{
    try{
        let temp=await axios.get("http://localhost:8080/facility");
        return temp.data;
    }catch(err){
        
    }
}
export const getAllEmployee = async (name, degree)=>{
    try{
        let temp= await axios.get(`http://localhost:8080/employee?name_like=${name}&Degree_like=${degree}`);
        return temp.data;
    }catch(err){
        
    }
}
export const getDeleteEmployee =async (id)=>{
    let temp=await axios.delete("http://localhost:8080/employee/"+id);
    return temp.data;
}

export const add = async(value)=>{
    let temp=await axios.post("http://localhost:8080/employee",value);
    return temp.status;
}
export const getFindById = async(id)=>{
    try{
        let temp=await axios.get("http://localhost:8080/employee/"+id);
        return temp.data;
    }catch(err){
        console.log(err);
    }
}
export const updateEmployee= async (id,value)=>{
    let temp=await axios.put("http://localhost:8080/employee/"+id,value);
    return temp.status;
}