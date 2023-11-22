import { Formik, Form, Field, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import axios from "axios";
import * as Yup from "yup";

export function ToDoList(){

    const [todo,setTodo]=useState([]);
    // const toDoListInit={
    //     title:""
    // };
    // const toDoListValidate={
    //     title:Yup.string()
    //     .required("Khong duoc de trong")
    // };
    const changeText=(props , value)=>{
        setTodo(prev=>({
            ...prev,
            [props]:value
        }))
    };
    const handleSubmit=()=>{
         axios.post("http://localhost:8080/list",todo),
         alert("Thêm thành công")
    };
    // return(
    //     <>
    //         <Formik
    //         initialValues={toDoListInit}
    //         validationSchema={Yup.object().shape(toDoListValidate)}
    //         onSubmit={(value=>{
    //             handleSubmit(value);
    //         })}>
    //             <Form>
    //                 <h1>Todo List</h1>
    //                 <Field type="text" name="title" onChange={(evt)=>changeText('title',evt.target.value)}/>
    //                 <ErrorMessage name="title" component="span"></ErrorMessage>
    //                 <button type="submit">Submit</button>
    //             </Form>
    //         </Formik>
    //     </>
    // );
    return (
        <div>
          <h1>To Do List</h1>
          <input
            type="text"
            name="title"
            onChange={(evt)=>changeText('title',evt.target.value)}
          />
          <button onClick={() => handleSubmit()}>Submit</button>
        </div>
      );
}