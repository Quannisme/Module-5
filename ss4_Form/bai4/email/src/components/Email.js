import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function Email() {
  const emailInit = {
    name: "",
    email: "",
    message: "",
  };
  const emailValidate = {
    name: Yup.string().required("không được bỏ trống"),
    email: Yup.string()
      .required("Không được bỏ trống")
      .matches(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,"Không đúng định dạng email"),
    message: Yup.string().required("không được bỏ trống")
  };
  return (
    <>
      <Formik
        initialValues={emailInit}
        onSubmit={(values) => {
          console.log("them thanh cong");
        }}
        validationSchema={Yup.object().shape(emailValidate)}
      >
        <Form>
          <div>
            <p>To</p>
            <Field type="text" name="name" />
            <ErrorMessage name="name" component="span"></ErrorMessage>
          </div>
          <div>
            <p>Email</p>
            <Field type="text" name="email" />
            <ErrorMessage name="email" component="span"></ErrorMessage>
          </div>
          <div>
            <p>Message</p>
            <Field type="text" name="message" />
            <ErrorMessage name="message" component="span"></ErrorMessage>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
