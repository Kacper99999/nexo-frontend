import { Helmet, HelmetProvider } from 'react-helmet-async';
import { LogInForm } from '../components/LogInForm';
import Logo from '../components/Logo';

function LoginPage() {
  return (
    <HelmetProvider>
      <div style={{
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
      }}>
        <Logo />
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LogInForm />
      </div>
    </HelmetProvider>
  );
}

export default LoginPage;
