import axios from "axios";

export const getAll = async (name) => {
    try {
        console.log(name)
        let temp = await axios.get("http://localhost:8080/students?name_like=" + name);
        console.log(temp);
        return temp.data;
    } catch (err) {

    }
}

export const save = async (values) => {
    let temp = await axios.post("http://localhost:8080/students", values);
    console.log(temp);
    return temp.status;
}
