import React, {Component} from "react";
import DemoState from "../DemoState";

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    name: "haiTT",
                    age: 20
                },
                {
                    id: 2,
                    name: "TrungDP",
                    age: 35
                },
                {
                    id: 3,
                    name: "TrungDC",
                    age: 30
                }
            ],
            numberCount: 3,
            student: {
                id: 0,
                name: "",
                age: 0
            }
        }
    }

    changeText = (properties, value) => {
        this.setState({
            student: {
                ...this.state.student,
                [properties]: value
            }
        })
    }

    createStudent = () => {
        this.setState((prve) => {
            return {
                students: [...prve.students, prve.student]
            }
        })
    }

    render() {
        return (

            <>

                <h1>Danh sách học sinh của lớp {this.props.nameClass} với sĩ số là {this.props.sizeOfClass}</h1>
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
                        this.state.students.map((values, index) => {
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
                    ID: <input onChange={(evt) => this.changeText("id", evt.target.value)}/>
                    Name: <input onChange={(evt) => this.changeText("name", evt.target.value)}/>
                    Age: <input onChange={(evt) => this.changeText("age", evt.target.value)}/>
                    <button type="button" onClick={this.createStudent}>Create</button>
                </form>

                <button onClick={() => this.props.changeName("A1222I1")}>CLick</button>
            </>
        )
    }
}

export default StudentList;
