import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Select, { defaultValue } from 'react-select';
import * as rentService from "../../service/RentService"

export function CreateEmployee() {
  const [employee, setEmployee] = useState([]);
  const initEmployee = {
    name: "",
    birthday: "",
    identity_card: 0,
    salary: 0,
    phone: "",
    email: "",
    Degree: "",
    Position: "",
    Division: "",
  };
  const validateEmployee = {
    name: Yup.string()
      .required("không được bỏ trống ")
      .matches(
        /^(?:[A-Z][a-z]*\s?)+$/,
        "Ký tự đầu tiên của mỗi từ phải viết hoa"
      ),
    birthday: Yup.string().required("Không được bỏ trống"),
    identity_card: Yup.number()
      .required("Không được bỏ trống"),
    salary: Yup.number().required("Không được bỏ trống"),
    phone: Yup.string()
      .required("Không được bỏ trống"),
    email: Yup.string()
      .required("Không được bỏ trống")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Email không hợp lệ"
      ),
  };
  const handleSubmit =async(value)=>{
    await rentService.add(value);
  }
  return (
    <>
      <Formik
        initialValues={initEmployee}
        validationSchema={Yup.object().shape(validateEmployee)}
        onSubmit={(value) => {
          handleSubmit(value);
        }}
      >
        <Form>
          <div>
            <h1>Add new Employee</h1>
            <span>name</span>
            <Field name="name" type="text" />
            <ErrorMessage
              name="name"
              component="span"
              className="form-err"
            ></ErrorMessage>
            <span>birthday</span>
            <Field name="birthday" type="date" />
            <ErrorMessage
              name="birthday"
              component="span"
              className="form-err"
            ></ErrorMessage>
            <span>identity_card</span>
            <Field name="identity_card" type="number" />
            <ErrorMessage
              name="identity_card"
              component="span"
              className="form-err"
            ></ErrorMessage>
            <span>Salary</span>
            <Field name="salary" type="number" />
            <ErrorMessage
              name="salary"
              component="span"
              className="form-err"
            ></ErrorMessage>
            <span>Phone</span>
            <Field name="phone" type="number" />
            <ErrorMessage
              name="phone"
              component="span"
              className="form-err"
            ></ErrorMessage>
            <span>email</span>
            <Field name="email" type="text" />
            <ErrorMessage
              name="email"
              component="span"
              className="form-err"
            ></ErrorMessage>
            <label htmlFor="Degree">Degree</label>
            <Field
              name="Degree"
              as={Select}
              options={[
                { value: "Đại học", label: "Đại học" },
                { value: "Trung Cấp", label: "Trung Cấp" },
                { value: "Cao đẳng", label: "Cao đẳng" },
                { value: "Sau đại học", label: "Sau đại học" },
              ]}
            />
            <ErrorMessage name="Degree" component="span" />
            <label htmlFor="Position">Position</label>
            <Field
            name="Position"
              as={Select}
              options={[
                {value:"Lễ tân" , label:"Lễ tân"},
                {value:"Phục vụ" , label:"Phục vụ"},
                {value:"Chuyên viên" , label:"Chuyên viên"},
                {value:"Giám sát" , label:"Giám sát"},
                {value:"Quản lí",label:"Quản lí"},
                {value:"Giám đốc",label:"Giám đốc"}
              ]}/>
            <ErrorMessage name="Position" component="span" />
            <label htmlFor="Division">Division</label>
            <Field
                name="Division"
                as={Select}
                defaultValue={{value:"Hành chính", label:"Hành chính"}}
                options={[
                    {value:"Sale-Marketing" , label:"Sale-Marketing"},
                    {value:"Hành chính", label:"Hành chính"},
                    {value:"Phục vụ" , label:"Phục vụ"},
                    {value:"Quản lí", label:"Quản lí"}
                ]}/>
            <ErrorMessage name="Division" component="div" />
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
