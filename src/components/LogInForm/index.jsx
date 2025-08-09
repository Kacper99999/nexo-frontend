import { Formik, Field, Form } from 'formik';
import { selectUser, selectIsLoggedIn } from '../../redux/selectors/auth.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from '../../redux/operations/auth.operations';
export const LogInForm = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={(values) => {
            dispatch(logIn(values));
            setTimeout(() => console.log(user))
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
