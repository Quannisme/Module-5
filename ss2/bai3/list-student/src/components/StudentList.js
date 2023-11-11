import React, { Component } from 'react';

class StudentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: [
                {
                    id: 1,
                    name: "Nguyễn Văn Quân",
                    age: 18
                },
                {
                    id: 2,
                    name: "Nguyễn Văn A",
                    age: 35
                },
                {
                    id: 3,
                    name: "Nguyễn Văn B",
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
    render() {
        return (
            <div>
                 <h1>Danh sách học sinh của lớp {this.props.nameClass} với sĩ số là {this.props.sizeOfClass}</h1>
                <table border='1px'>
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
            </div>
        );
    }
}

export default StudentList;