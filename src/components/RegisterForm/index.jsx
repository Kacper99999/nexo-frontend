import { useSelector, useDispatch } from "react-redux";
import { register } from "../../redux/operations/auth.operations";
import { selectUser } from "../../redux/selectors/auth.selectors";
import { Formik, Field, Form } from "formik";

export const RegisterForm = () => {

    const user = useSelector(selectUser);
    const dispatch = useDispatch();

    return (
        <>
          <div>
            <Formik
              initialValues={{userName: '', email: '', password: '' }}
              onSubmit={(values) => {
                dispatch(register(values));
                console.log(user)
              }}
            >
              {() => (
                <Form>
                    <Field name="userName" type="tekst"/>
                  <Field name="email" type="email" />
                  <Field name="password" type="password" />
                  <button type="submit">submit</button>
                </Form>
              )}
            </Formik>
          </div>
        </>
      );
}