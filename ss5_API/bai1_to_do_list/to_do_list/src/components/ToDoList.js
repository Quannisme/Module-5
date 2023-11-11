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
    const toDoListSchema = Yup.object().shape({
      title: Yup.string().required("Không được để trống")
  });

  const handleSubmit = (values) => {
      axios.post("https://jsonplaceholder.typicode.com/todos", values)
      .then(response => {
          alert("Thêm thành công");
          // Xử lý thêm sau khi thành công (ví dụ: cập nhật UI)
      })
      .catch(error => {
          console.error("Có lỗi xảy ra:", error);
          // Xử lý lỗi
      });
  };
    return (
      <Formik
          initialValues={{ title: "" }}
          validationSchema={toDoListSchema}
          onSubmit={handleSubmit}
      >
          <Form>
              <h1>Todo List</h1>
              <Field type="text" name="title"/>
              <ErrorMessage name="title" component="span"/>
              <button type="submit">Submit</button>
          </Form>
      </Formik>
  );
}