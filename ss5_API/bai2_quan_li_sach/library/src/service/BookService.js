import axios from "axios";


export const getAll = async (title , quantity)=>{
    try{
        // let temp=await axios.get("http://localhost:8080/library?title_like="+title);
        let temp = await axios.get(`http://localhost:8080/library?title_like=${title}&quantity_like=${quantity}`);
        console.log(temp);
        return temp.data;
    }catch(err){
    }
}

export const add=async(values)=>{
    let temp = await axios.post("http://localhost:8080/library",values);
    console.log(temp);
    return temp.status;
}
export const deletee = async(id)=>{
    let temp = await axios.delete("http://localhost:8080/library/"+id);
    return temp.data;
}
