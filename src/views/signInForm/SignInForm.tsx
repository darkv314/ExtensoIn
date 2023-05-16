import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/inputs/Input";
import "./SignInForm.css";

function SignInForm() {
    const methods = useForm();
    return (
        <div className="sign-in-form">
            <FormProvider {...methods}>
                <form action="">
                    <h1>Bienvenid@</h1>
                    <Input id="email" label="Email" type="text" />
                    <Input id="password" label="Password" type="password" />
                </form>
            </FormProvider>
        </div>
    );
}

export default SignInForm;
