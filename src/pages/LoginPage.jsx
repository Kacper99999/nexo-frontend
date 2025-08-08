import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LogInForm } from '../components/LogInForm';

function LoginPage() {
  return (
    <HelmetProvider>
      <div>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LogInForm />
      </div>
    </HelmetProvider>
  );
}

export default LoginPage;
