import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations/auth.operations';
export const LogInForm = () => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            dispatch(logIn(values));
          }}
        >
          {() => (
            <Form>
              <Field name="email" type="email" />
              <Field name="password" type="password" />
              <button type="submit">submit</button>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};
