import axios from "axios";

export const getAll=async()=>{
        try {
            let temp = await axios.get("https://jsonplaceholder.typicode.com/todos");
            console.log(temp);
            return temp.data;
        } catch (err) {
    
        }
}