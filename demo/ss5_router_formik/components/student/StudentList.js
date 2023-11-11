import {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";

export function StudentList() {
    const [students, setStudents] = useState([]);
    const [name, setName] = useState("");
    const [student, setStudent] = useState({
        id: 0,
        name: "",
        age: 0
    });

    useEffect(() => {
        //Call API để lấy danh sách
        setStudents([
            {
                id: 1,
                name: "HaiTT",
                age: 20
            },
            {
                id: 2,
                name: "Long",
                age: 30
            },
            {
                id: 3,
                name: "TrungDP",
                age: 30
            },
            {
                id: 4,
                name: "TrungDC",
                age: 30
            }

        ])
        setStudents((prev) => {
            return prev.filter((item) => item.name.toLowerCase().includes(name.toLowerCase()))
        });
    }, [name]);

    // useEffect(() => {
    //     //call API => cập nhật students
    //     setStudents((prev) => {
    //         return prev.filter((item) => item.name.includes(name))
    //     });
    //     //clean up
    //     return () => {
    //         alert("123")
    //     }
    // }, [name])


    const changeText = (key, value) => {
        setStudent((prev) => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    const createStudent = () => {
        setStudents((prev) => {
            return [...prev, student]
        })
        setStudent({id: 0, name: "", age: 0})
    }

    return (
        <>

            <input onChange={(evt) => setName(evt.target.value)}/>
            <table>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                </tr>
                </thead>
                <tbody>
                {

                    students.map((values, index) => {
                        return (
                            <tr key={index}>
                                <td>{values.id}</td>
                                <td>{values.name}</td>
                                <td>{values.age}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
            <form>
                ID: <input value={student.id} onChange={(evt) => changeText("id", evt.target.value)}/>
                Name: <input value={student.name} onChange={(evt) => changeText("name", evt.target.value)}/>
                Age: <input value={student.age} onChange={(evt) => changeText("age", evt.target.value)}/>
                <button type="button" onClick={createStudent}>Create</button>
            </form>
        </>
    )

}
