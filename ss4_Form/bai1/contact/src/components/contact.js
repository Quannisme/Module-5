import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {useEffect} from "react";


export function Contact(){
    const contactInit={
        name:"",
        email:"",
        phone:0,
        message:""
    };
    const contactValidation={
        name:Yup.string()
            .required("Ten khong duoc de trong"),
        email:Yup.string()
            .required("Email khong duoc de trong"),
        phone:Yup.number()
            .required("Phone khong duoc de trong"),
        message:Yup.number()
            .required("Message Khong duoc de trong")    
    };
    return (
        <Formik
            initialValues={
                contactInit
            }
            onSubmit={(value)=>{
                console.log("Them moi thanh cong");
            }}
            validationSchema={
                Yup.object().shape(contactValidation)
            }
        >
          <Form>
            <h1>Contact form</h1>
            <table>
              <tbody>
                <tr>
                  <th>Name</th>
                </tr>
                <tr>
                  <td>
                    <Field type="text" name="name" id='contactName'></Field>
                    <ErrorMessage name="name" component="span" className="form-err"></ErrorMessage>
                  </td>
                </tr>
                <tr>
                  <th>Email</th>
                </tr>
                <tr>
                  <td>
                    <Field type="text" name="email" id="contactEmail"></Field>
                    <ErrorMessage name="email" component="span" className="form-err"></ErrorMessage>
                  </td>
                </tr>
                <tr>
                  <th>Phone</th>
                </tr>
                <tr>
                  <td>
                    <Field type="text" name="phone" id="contactPhone"></Field>
                    <ErrorMessage name="phone" component="span" className="form-err"></ErrorMessage>
                  </td>
                </tr>
                <tr>
                  <th>Mesaage</th>
                </tr>
                <tr>
                  <td>
                    <Field as="textarea" cols="30" rows="4" name="message" id="contactMessage"></Field>
                    <ErrorMessage name="message" component="span" className="form-err"></ErrorMessage>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                    <button type="submit">Submmit</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </Form>
        </Formik>
      );

}