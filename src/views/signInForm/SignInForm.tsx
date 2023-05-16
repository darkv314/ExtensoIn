import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import Input from "../../components/inputs/Input";
import "./SignInForm.css";
import MainButton from "../../components/buttons/MainButton";

import {
    errMsgRequired,
    errMsgEmail,
    EMAIL_CHECK,
} from "../../helpers/helpers";

type FormValues = {
    email: string;
    password: string;
};

function SignInForm() {
    const methods = useForm<FormValues>();

    const onSubmit: SubmitHandler<any> = (data) => console.log(data);

    return (
        <div className="sign-in-form">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <h1>Bienvenid@</h1>
                    <div className="input-container">
                        <Input
                            id="email"
                            label="Email"
                            type="text"
                            validations={{
                                required: errMsgRequired,
                                pattern: {
                                    value: EMAIL_CHECK,
                                    message: errMsgEmail,
                                },
                            }}
                        />
                        <Input
                            id="password"
                            label="Password"
                            type="password"
                            validations={{
                                required: errMsgRequired,
                            }}
                        />
                    </div>
                    <MainButton
                        type="submit"
                        backgroundColor={"blue"}
                        color="white"
                        border="none"
                    >
                        Iniciar sesión
                    </MainButton>
                </form>
            </FormProvider>
        </div>
    );
}

export default SignInForm;
