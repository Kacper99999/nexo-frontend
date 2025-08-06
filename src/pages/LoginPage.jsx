import { Helmet, HelmetProvider } from "react-helmet-async";
import { LogInForm } from "../components/LogInForm"

export default function LoginPage() {
    return(
        <HelmetProvider>
            <div>
                <Helmet>
                    <title>Login</title>
                </Helmet>
                <LogInForm/>
            </div>
        </HelmetProvider>
    );
};