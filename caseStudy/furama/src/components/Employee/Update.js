import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as rentService from "../../service/RentService";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from 'react-hot-toast';
export function UpdateEmployee() {
  let { id } = useParams();
  // update thì useState là rỗng
  const [employee, setEmployee] = useState();
  const Navigate = useNavigate();
  useEffect(() => {
    getFindById();
  }, [id]);

  const getFindById = async () => {
    let temp = await rentService.getFindById(id);
    console.log(temp);
    setEmployee(temp);
  };
  const validateEmployee = {
    name: Yup.string()
      .required("không được bỏ trống ")
      .matches(
        /^(?:[A-Z][a-z]*\s?)+$/,
        "Ký tự đầu tiên của mỗi từ phải viết hoa"
      ),
    birthday: Yup.string().required("Không được bỏ trống"),
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
  const updateNow = async (value) => {
    await rentService.updateEmployee(id, value);
    Navigate("/");
  };
  if (!employee) {
    return null;
  }
  const initEmployee = {
    name: employee.name,
    birthday: employee.birthday,
    identity_card: employee.identity_card,
    salary: employee.salary,
    phone: employee.phone,
    email: employee.email,
    Degree: employee.Degree,
    Position: employee.Position,
    Division: employee.Division,
  };
  return (
    <>
      <Formik
        initialValues={initEmployee}
        validationSchema={Yup.object().shape(validateEmployee)}
        onSubmit={(value) => {
          updateNow(value);
          toast.success("Cập nhật thành công");
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
            <Field as="select" name="Degree">
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
