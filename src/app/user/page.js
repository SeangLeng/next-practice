'use client';
import { Form, Formik, ErrorMessage, Field } from "formik";
import * as Yup from 'yup';

export default function Users() {
    // define validationSchema to define rule and error message
    const validationSchema = Yup.object({
        name: Yup.string().required("Username can not be blank"),
        email: Yup.string().email("Invalid email address"),
        password: Yup.string().min(4, "Must be at least 4 characters long"),
        role: Yup.string().required("u have to select the role to submit who you are "),
    })
    const postUsers = (user) => {
        fetch("https://api.escuelajs.co/api/v1/users/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }).then(response => response.json()).then(response => console.log(response));
    }


    return (
        <div className="d-flex justify-content-between align-item-center w-100">
            <img src="https://img.freepik.com/premium-photo/abstract-3d-surface-background-digital-painting-artwork-abstract-background_743855-1283.jpg"
                alt="thummhnail" className="object-fit" style={{ width: "50%", height: "100vh" }} />
            <div className="container">
                <Formik
                    initialValues={{
                        name: "",
                        email: "",
                        password: "",
                        role: "",
                        avatar: "https://1.bp.blogspot.com/-kK7Fxm7U9o0/YN0bSIwSLvI/AAAAAAAACFk/aF4EI7XU_ashruTzTIpifBfNzb4thUivACLcBGAsYHQ/s1280/222.jpg"
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        // execute function to server
                        setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            postUsers(values);
                        }, 400);

                    }}
                >
                    {
                        ({ isSubmitting }) => (
                            <Form className="w-100">
                                <h1 className="text-center">Enter your information here</h1>
                                <div className="mb-3">
                                    <h5>Your name</h5>
                                    <Field type="text" name="name" className="form-control" placeholder="Waitng your input " />
                                    <ErrorMessage name="name" />
                                </div>
                                <div className="mb-3">
                                    <h5>Your email</h5>

                                    <Field type="email" name="email" className="form-control" placeholder="Waitng your input " />
                                    <ErrorMessage name="email" />
                                </div>
                                <div className="mb-3">
                                    <h5>Your password</h5>

                                    <Field type="password" name="password" className="form-control" placeholder="Waitng your input " />
                                    <ErrorMessage name="password" />
                                </div>
                                <div className="mb-3">
                                    <h5>Your role</h5>

                                    <Field
                                        as="select"
                                        type="password" name="role" className="form-control" >
                                        <option value="">select your role</option>
                                        <option value="admin">admin</option>
                                        <option value="customer">customer</option>
                                    </Field>
                                    <ErrorMessage name="role" />
                                </div>
                                <button className="btn bg-success text-white" type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </div>
    )
}