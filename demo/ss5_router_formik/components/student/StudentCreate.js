import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export function StudentCreate() {
    const navigate = useNavigate();
    const studentInit = {
        name: "",
        age: 0,
        gender: "0",
        languages: []
    };
    const studentValidate = {
        name: Yup.string()
            .required("Tên không để trống")
            .matches(/^[A-Za-z ]{3,100}$/, "Tên không đúng định dang. Example: Truong Tan Hai"),
        age: Yup.number()
            .min(18, "Tuổi không được nhỏ hơn 18")
            .max(100, "Tuổi không được lớn hơn 100")
    };

    useEffect(() => {
        return () => {
            alert("Bye bye")
        }
    })

    return (
        <>
            <Formik
                initialValues={
                    studentInit
                }
                onSubmit={(values) => {
                    //call API
                    console.log(values)
                    toast.warn("Thêm mới thành công")
                    navigate("/students");
                }}
                validationSchema={
                    Yup.object(studentValidate)
                }>
                <div className='container'>
                    <h1>Create Student</h1>
                    <Form>
                        <div className='mb-3'>
                            <label htmlFor='studentName' className='form-label'>Name</label>
                            <Field type='text' className='form-control' name="name" id='studentName'/>
                        <ErrorMessage name="name" component="span" className="form-err"></ErrorMessage>
                        </div>
                        <div className='mb-3'>
                            <label htmlFor='studentAge' className='form-label'>Age</label>
                            <Field type='number' className='form-control' name="age" id='studentAge'/>
                        </div>
                        <div className='mb-3'>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender" id="inlineRadio1"
                                       value="1"/>
                                <label className="form-check-label" htmlFor="inlineRadio1">Male</label>
                            </div>
                            <div className="form-check form-check-inline">
                                <Field className="form-check-input" type="radio" name="gender" id="inlineRadio2"
                                       value="0"/>
                                <label className="form-check-label" htmlFor="inlineRadio2">FeMale</label>
                            </div>
                        </div>

                        <label htmlFor='languages' className='form-label'>Languages</label>
                        <div className="form-check">
                            <Field className="form-check-input" name="languages" type="checkbox" value="C#"
                                   id="flexCheckDefault"/>
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                C#
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" name="languages" type="checkbox" value="Java" id="cb1"/>
                            <label className="form-check-label" htmlFor="cb1">
                                JAVA
                            </label>
                        </div>
                        <div className="form-check">
                            <Field className="form-check-input" name="languages" type="checkbox" value="ReactJS"
                                   id="cb2"/>
                            <label className="form-check-label" htmlFor="cb2">
                                ReactJS
                            </label>
                        </div>
                        <button type='submit' className='btn btn-primary'>Submit</button>
                    </Form>
                </div>
            </Formik>
        </>
    )
}
