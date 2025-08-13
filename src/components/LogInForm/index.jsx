import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations/auth.operations';
import  css  from './LogIn.module.css';

export const LogInForm = () => {
  const dispatch = useDispatch();

  return (
    <div className={css.card}>
      <h2 className={css.title}>Log in</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        onSubmit={(values) => {
          dispatch(logIn(values));
        }}
      >
        {() => (
          <Form className={css.form}>
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
