import axios from "axios";

export const getAll = async()=>{
    try{
        let temp=await axios.get("http://localhost:8080/facility");
        return temp.data;
    }catch(err){
        
    }
}
export const getAllEmployee = async ()=>{
    try{
        let temp= await axios.get("http://localhost:8080/employee");
        return temp.data;
    }catch(err){
        
    }
}
export const getDeleteEmployee =async (id)=>{
    let temp=await axios.delete("http://localhost:8080/employee/id"+id);
    return temp.status;
}

export const add = async(value)=>{
    let temp=await axios.post("http://localhost:8080/employee",value);
    return temp.status;
}