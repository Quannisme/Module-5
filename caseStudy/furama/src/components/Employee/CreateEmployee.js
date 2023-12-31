import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import * as rentService from "../../service/RentService";
import "./Employee.css"
import { useNavigate } from "react-router-dom";
import { toast } from 'react-hot-toast';
export function CreateEmployee() {
  const [employee, setEmployee] = useState([]);
  const navigate=useNavigate();
  const checkAge=()=>{
    const today=new Date();
    return new Date(today.getFullYear()-18,today.getMonth(),today.getDate());
  }
  const initEmployee = {
    name: "",
    birthday: "",
    identity_card: 0,
    salary: 0,
    phone: "",
    email: "",
    Degree: "Trung Cấp",
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
    birthday: Yup.date().max(checkAge(),"Phai tren 18 tuoi").required("Không được bỏ trống"),
    identity_card: Yup.number().required("Không được bỏ trống"),
    salary: Yup.number().required("Không được bỏ trống"),
    phone: Yup.string().required("Không được bỏ trống"),
    email: Yup.string()
      .required("Không được bỏ trống")
      .matches(
        /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        "Email không hợp lệ"
      ),
  };
  const handleSubmit = async (value) => {
    await rentService.add(value);
    navigate("/employee");
  };
  return (
    <>
      <Formik
        initialValues={initEmployee}
        validationSchema={Yup.object().shape(validateEmployee)}
        onSubmit={(value) => {
          handleSubmit(value);
          toast.success('Đăng kí thành công')
        }}
      >
        <Form>
        <div className="form-container">
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
            <Field as="select" name="Degree" >
            <option value={"Trung cấp"}>Trung cấp</option>
            <option value={"Cao đẳng"}>Cao đẳng</option>
            <option value={"Đại học"}>Đại học</option>
            <option value={"Sau Đại học"}>Sau Đại học</option>
          </Field>
            <label htmlFor="Position">Position</label>
            <Field as="select" name="Position">
            <option value={"Lễ tân"}>Lễ tân</option>
            <option value={"Phục vụ"}>Phục vụ</option>
            <option value={"Chuyên viên"}>Giám sát</option>
            <option value={"Quản Lý"}>Quản lý</option>
            <option value={"Giám đốc"}>Giám đốc</option>
          </Field>
            <label htmlFor="Division">Division</label>
            <Field as="select" name="Division">
            <option value={"Sale-Marketing"}>Sale-Marketing</option>
            <option value={"Hành Chính"}>Hành Chính</option>
            <option value={"Phục Vụ"}>Phục vụ</option>
            <option value={"Quản Lý"}>Quản lý</option>
          </Field>
          </div>
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
}
