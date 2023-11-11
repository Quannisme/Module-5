import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export function Sach() {
  const sachInit = {
    title: "",
    number: 0,
  };
  const sachValidate = {
    title: Yup.string().required("Khong duoc de trong"),
    number: Yup.number().required("khong duoc de trong"),
  };
  return (
    <>
      <Formik
        initialValues={sachInit}
        onSubmit={(value) => {
          console.log("dda them thanh cong");
        }}
        validationSchema={Yup.object().shape(sachValidate)}
      >
        <Form>
          <h1>Library</h1>
          <div>
            <p>Tieu de</p>
            <Field type="text" name="title"></Field>
            <ErrorMessage
              name="title"
              component="span"
              className="form-err"
            ></ErrorMessage>
          </div>
          <div>
            <p>So luong</p>
            <Field type="number" name="number"></Field>
            <ErrorMessage
              name="number"
              component="span"
              className="form-err"
            ></ErrorMessage>
          </div>
          <button type="submit">Submmit</button>
        </Form>
      </Formik>
    </>
  );
}
