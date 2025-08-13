import { Helmet, HelmetProvider } from 'react-helmet-async';
import { RegisterForm } from '../components/RegisterForm';
import Logo from '../components/Logo';

export default function Register() {
  return (
    <HelmetProvider>
      <div style={{
              display:'flex',
              flexDirection:'column',
              alignItems:'center'
      }}>
        <Logo />
        <Helmet>
          <title>Register</title>
        </Helmet>
        <RegisterForm />
      </div>
    </HelmetProvider>
  );
}
