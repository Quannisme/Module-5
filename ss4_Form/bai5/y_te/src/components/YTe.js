import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
export function YTe(){
    const yTeInit={
        name:"",
        idCard:0,
        year:0,
        gender:"0",
        national:"",
        company:"",
        role:"",
        healthInsurance:[],
        country:"",
        district:"",
        wards:"",
        address:"",
        phone:0,
        email:""
    };
    const yTeValidate={
        name:Yup.string()
        .required("Không được bỏ trống"),
        idCard:Yup.number()
        .required("Không được bỏ trống"),
        year:Yup.number()
        .required("Không được bỏ trống")
        .min(1900),
        national:Yup.string()
        .required("Không được bỏ trống"),
        country:Yup.string()
        .required("Không được bỏ trống"),
        district:Yup.string()
        .required("Không được bỏ trống"),
        wards:Yup.string()
        .required("không được bỏ trống "),
        address:Yup.string()
        .required("Không được bỏ trống"),
        phone:Yup.number()
        .required("không được bỏ trống"),
        email:Yup.string()
        .required("không được bỏ trống")
        .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/,"Email sai định dạng")
    };
    const handleSubmit=()=>{
        alert("Khai báo thành công")
    };
    return(
        <>
            <div>
            <h3>Tờ khai y tế</h3>
            <Formik initialValues={yTeInit} validationSchema={Yup.object().shape(yTeValidate)} onSubmit={handleSubmit}>
                <Form>
                    <div>
                        <label>Họ tên</label>
                        <Field name="name" />
                        <ErrorMessage name="name" component="span" className="form-err"></ErrorMessage>
                    </div>
                    <div>
                        <label>Số hộ chiếu /CMND</label>
                        <Field name="idcard" />
                        <ErrorMessage name="idCard" component="span" className="form-err"></ErrorMessage>
                    </div>
                    <div>
                        <label>Năm sinh</label>
                        <Field name="year" />
                        <ErrorMessage name="year" component="span" className="form-err"></ErrorMessage>
                    </div>
                    <div>
                        <label>Giới tính</label>
                        <Field type="radio" name="gender" value="0" />
                        <span>Nam</span>
                        <Field type="radio" name="gender" value="1" />
                        <span>Nữ</span>
                    </div>
                    <div>
                        <label>Quốc tịch</label>
                        <Field name="national" />
                        <ErrorMessage name="national" component="span" className="form-err"></ErrorMessage>
                    </div>
                    <div>
                        <label>Công ty làm việc</label>
                        <Field name="company" />
                    </div>
                    <div>
                        <label>Bộ phận làm việc</label>
                        <Field name="role" />
                    </div>
                    <div>
                        <label>Có thể bảo hiển y tế </label>
                        <Field type="checkbox" name="healthInsurance" value="yes"/>
                    </div>

                    <h2>Địa chỉ liên lạc tại Việt Nam</h2>

                    <div>
                        <label>Tỉnh thành</label>
                        <Field name="country" />
                        <ErrorMessage name="country" component="span" className="form-err"></ErrorMessage>
                    </div>
                    <div>
                        <label>Quận /Huyện</label>
                        <Field name="district" />
                        <ErrorMessage name="district" component="span" className="form-err"></ErrorMessage>
                    </div>
                    <div>
                        <label>Phường /Xã</label>
                        <Field name="wards" />
                        <ErrorMessage name="wards" component="span" className="form-err"></ErrorMessage>
                    </div>
                    <div>
                        <label>Số nhà, phố, tổ dân phố/thôn/đội</label>
                        <Field name="address" />
                        <ErrorMessage name="address" component="span" className="form-err"></ErrorMessage>
                    </div>
                    <div>
                        <label>Điện thoại</label>
                        <Field name="phone" />
                        <ErrorMessage name="phone" component="span" className="form-err"></ErrorMessage>
                    </div>
                    <div>
                        <label>Email</label>
                        <Field name="email" />
                        <ErrorMessage name="email" component="span" className="form-err"></ErrorMessage>
                    </div>
                    <button type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
        </>
    );
}