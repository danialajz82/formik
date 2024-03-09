import React from "react";
import {
  ErrorMessage,
  FastField,
  Field,
  Form,
  Formik,
  useFormik,
} from "formik";
import * as Yup from "yup";
import PersonalField from "./PersonalField";
import personalError from "./personalError";
const initialValues = {
  name: "",
  email: "",
  password: "",
  bio: "",
};
const onSubmit = (values) => {
  console.log(values);
};
// const validate = (values) => {
//   let errors = {};
//   if (!values.name) {
//     errors.name = "لطفا این قسمت را پر کنید";
//   }
//   if (!values.email) {
//     errors.email = "لطفا این قسمت را پر کنید";
//   } else if (
//     !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
//   ) {
//     errors.email = "لطفا قالب ایمیل را رعایت کنید مثال : aaa@example.bbb";
//   }
//   if (!values.password) {
//     errors.password = "لطفا این قسمت را پر کنید";
//   }
//   return errors;
// };

const validationSchema = Yup.object({
  name: Yup.string().required("لطفا این قسمت را پر کنید "),
  email: Yup.string()
    .required("لطفا این قسمت را پر کنید ")
    .email("لطفا قالب ایمیل را رعایت کنید : example@gmail.com"),
  password: Yup.string()
    .required("لطفا این قسمت را پر کنید")
    .min(8, "حداقل ۸ کاراکتر را وارد کنید"),
});

const Registerform = () => {
  // const formik = useFormik({
  //   initialValues,
  //   onSubmit,
  //   // validate,
  //   validationSchema,
  // });

  const attrs = {
    type: "text",
    className: "form-control",
    id: "name",
    name: "name",
  };
  // console.log(formik);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <div className="auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0">
        <div className="row w-100 justify-content-center align-items-center">
          <div className="auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3">
            <Form>
              <h1 className="text-center">
                <i className="fas fa-user-plus text-primary"></i>
              </h1>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  نام
                </label>
                <FastField
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="لطفا نام را وارد کنید"

                  // {...attrs}
                  // value={formik.values.name}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}

                  // {...formik.getFieldProps("name")}
                />
                {/* {formik.errors.name && formik.touched.name ? (
                  <small className="d-block text-center text-danger">
                    {formik.errors.name}
                  </small>
                ) : null} */}
                <ErrorMessage name="name" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  ایمیل
                </label>
                <FastField
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="لطفا ایمیل را وارد کنید"
                  // value={formik.values.email}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // {...formik.getFieldProps("email")}
                />
                {/* {formik.errors.email && formik.touched.email ? (
                  <small className="d-block text-center text-danger">
                    {formik.errors.email}
                  </small>
                ) : null} */}
                {(error) => (
                  <small className="d-block text-center text-danger">
                    {error}{" "}
                  </small>
                )}
                <ErrorMessage name="email" />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  رمز عبور
                </label>
                <FastField
                  name="password"
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // {...formik.getFieldProps("password")}
                >
                  {(props) => <PersonalField {...props} />}
                </FastField>
                {/* {formik.errors.password && formik.touched.password ? (
                  <small className="d-block text-center text-danger">
                    {formik.errors.password}
                  </small>
                ) : null} */}
                <ErrorMessage name="password" component={personalError} />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  بیوگرافی
                </label>
                <FastField
                  type="text"
                  className="form-control"
                  id="bio"
                  name="bio"
                  placeholder="لطفا بیوگرافی را وارد کنید"
                  as="textarea"
                  // value={formik.values.password}
                  // onChange={formik.handleChange}
                  // onBlur={formik.handleBlur}
                  // {...formik.getFieldProps("password")}
                />
                {/* {formik.errors.password && formik.touched.password ? (
                  <small className="d-block text-center text-danger">
                    {formik.errors.password}
                  </small>
                ) : null} */}
                <ErrorMessage name="bio" />
              </div>
              <div className="text-center w-100">
                <button type="submit" className="btn btn-primary">
                  ثبت نام
                </button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </Formik>
  );
};

export default Registerform;
