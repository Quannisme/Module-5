import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function Login() {
  const loginInit = {
    userName: "",
    password: ""
  };
  const loginValidate = {
    userName: Yup.string().required("Không được bỏ trống"),
    password: Yup.string().required("Không được bỏ trống"),
  };
  const route=useNavigate();
  const [login, setLogin] = useState(loginInit);
  const changText = (prop, value) => {
    setLogin((prev) => ({
      ...prev,
      [prop]: value
    }));
  };
  const handleSubmit=()=>{
    if(login.userName=="admin@gmail.com" && login.password=="letmein")
    {
        route("/employee");
    }
  }
  return (
    <>
      <div>
        <Formik
          initialValues={loginInit}
          validationSchema={Yup.object().shape(loginValidate)}
          onSubmit={handleSubmit}
        >
          <Form>
            <div>
              <p>UserName</p>
              <Field type="text" name="userName"  onchange={(evt)=>changText(userName ,evt.target.value)}/>
              <ErrorMessage name="userName" component="span"></ErrorMessage>
            </div>
            <div>
                <p>password</p>
                <Field type="text" name="password"/>
                <ErrorMessage name="password" component="span" onchange={(evt)=>changText(password ,evt.target.value)}></ErrorMessage>
            </div>
            <button type="submit">Login</button>
          </Form>
        </Formik>
      </div>
    </>
  );
}
