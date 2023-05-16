import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import Input from "../../components/inputs/Input";
import "./SignUpForm.css";
import MainButton from "../../components/buttons/MainButton";

import {
    errMsgRequired,
    errMsgEmail,
    EMAIL_CHECK,
} from "../../helpers/helpers";

type FormValues = {
    nombre: string;
    apellido: string;
    descripcion: string;
    fechaNacimiento: string;
    email: string;
    password: string;
};

function SignUpForm() {
    const methods = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);

    return (
        <div className="sign-up-form">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <h1>Regístrate</h1>
                    <PersonalInfo />
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

function PersonalInfo() {
    return (
        <div className="personal-info">
            <Input
                id="nombre"
                label="Nombre"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
            />
            <Input
                id="apellido"
                label="Apellido"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
            />
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
                id="contrasena"
                label="Contraseña"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
            />
            <Input
                id="fechaNacimiento"
                label="Fecha de nacimiento"
                type="text"
                validations={{
                    required: errMsgRequired,
                }}
            />
        </div>
    );
}

export default SignUpForm;
