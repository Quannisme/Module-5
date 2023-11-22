import { useEffect, useState } from "react";
import axios from "axios";

export function ListToDo(){
    const [list,setList]=useState([]);
    useEffect(() => {
        axios.get("http://localhost:8080/list").then((res) => {
          setList(res.data);
        });
      }, []);
    return(
        <>
            <div className="list">
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