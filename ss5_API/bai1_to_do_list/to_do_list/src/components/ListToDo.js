import { useEffect, useState } from "react";
import axios from "axios";

export function ListToDo(){
    const [list,setList]=useState([]);
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
          setList(res.data);
        });
      }, []);
    return(
        <>
            <div>
                {
                    list.map((values, index) => {
                        return (
                            <tr key={index}>
                                <td>{values.title}</td>
                            </tr>
                        )
                    })
                }
            </div>
        </>
    );
}