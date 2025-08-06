import { Formik, Field, Form } from 'formik';
import { selectUser } from './redux/selectors/auth.selectors';
import { useSelector, useDispatch } from 'react-redux';
import { logIn } from './redux/operations/auth.operations';
function LogInForm() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  return (
    <>
    <div>
    <Formik
      initialValues={{email: "", password: ""}}
      onSubmit ={(values) => {
        dispatch(logIn(values));
        console.log(user.token);
      }}>
        {() => (
          <Form>
        <Field name='email' type='email'/>
        <Field name='password' type='password'/>
        <button type='submit'>submit</button>
      </Form>
        )}
    </Formik>
    </div>
    </>
  );
}

export default LogInForm;