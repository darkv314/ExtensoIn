import { FormProvider, useForm } from "react-hook-form";
import Input from "../../components/inputs/Input";

function LoginForm() {
    const methods = useForm();
    return (
        <div className="login-form">
            <FormProvider {...methods}>
                <form action="">
                    <Input id="email" label="Email" type="text" />
                    <Input id="password" label="Password" type="password" />
                </form>
            </FormProvider>
        </div>
    );
}

export default LoginForm;
