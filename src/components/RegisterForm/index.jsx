import { useSelector, useDispatch } from 'react-redux';
import { register } from '../../redux/operations/auth.operations';
import { selectUser } from '../../redux/selectors/auth.selectors';
import { Formik, Field, Form } from 'formik';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <h2 className={css.title}>Register</h2>
      <Formik
        initialValues={{ userName: '', email: '', password: '' }}
        onSubmit={(values) => {
          dispatch(register(values));
          console.log(user);
        }}
      >
        {() => (
          <Form className={css.form}>
            <Field
              className={css.input}
              name="userName"
              type="text"
              placeholder="Username"
            />
            <Field
              className={css.input}
              name="email"
              type="email"
              placeholder="Email"
            />
            <Field
              className={css.input}
              name="password"
              type="password"
              placeholder="Password"
            />
            <button className={css.button} type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};