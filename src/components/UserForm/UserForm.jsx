import { Field, Form, Formik } from "formik";
import css from "./UserForm.module.css"
export default function UserForm (){
    return <Formik initialValues={{
        userName: "",
        userEmail: "",
        userComment: "",
    }}  onSubmit={(values, actions)=>{
        console.log(values)
        actions.resetForm();
    }}>
        <Form className={css.form}>
                <Field type="text" name="userName" placeholder="Full Name"/>
                <Field type="email" name="userEmail" placeholder="Email"/>

                <Field type="textarea" name="userComment" placeholder="Comment"/>
                <button type="submit">Send</button>
        </Form>
    </Formik>
}