import {
    FormProvider,
    useForm,
    SubmitHandler,
    useFormContext,
} from "react-hook-form";
import Input from "../../components/inputs/Input";
import "./SignUpForm.css";
import MainButton from "../../components/buttons/MainButton";
// import { IconoirProvider, ProfileCircle } from "iconoir-react";
import Avvvatars from "avvvatars-react";
import { faker } from "@faker-js/faker";
import { IconoirProvider, ArrowLeft } from "iconoir-react";
import { motion } from "framer-motion";

import {
    errMsgRequired,
    errMsgEmail,
    EMAIL_CHECK,
} from "../../helpers/helpers";
import { useState } from "react";
// import { useState } from "react";

type FormValues = {
    nombre: string;
    apellido: string;
    descripcion: string;
    fechaNacimiento: string;
    email: string;
    password: string;
};

function SignUpForm() {
    const methods = useForm<FormValues>({
        defaultValues: {
            nombre: "",
            apellido: "",
        },
    });
    const form = [<PersonalInfo key={0} />, <ProfesionalInfo key={1} />];
    const [formState, setFormState] = useState(0);
    const onSubmit: SubmitHandler<FormValues> = (data) => {
        formState === 0 ? setFormState(1) : console.log(data);
    };

    return (
        <>
            <h1>Regístrate</h1>
            <div className="sign-up-form">
                <FormProvider {...methods}>
                    {formState === 1 ? (
                        <motion.button
                            className="back-button"
                            type="button"
                            onClick={() => setFormState(0)}
                        >
                            <IconoirProvider>
                                <ArrowLeft width={15} height={15} />
                            </IconoirProvider>
                        </motion.button>
                    ) : null}

                    <form onSubmit={methods.handleSubmit(onSubmit)}>
                        {form[formState]}
                        <div className="change-button">
                            <MainButton
                                type="button"
                                backgroundColor={"blue"}
                                color="white"
                                border="none"
                                onClick={methods.handleSubmit(onSubmit)}
                            >
                                {formState === 0 ? "Siguiente" : "Registrarse"}
                            </MainButton>
                        </div>
                    </form>
                </FormProvider>
            </div>
        </>
    );
}

const bannerImg = faker.image.urlPicsumPhotos();

function PersonalInfo() {
    const { watch } = useFormContext();
    const nombre = watch("nombre");
    const apellido = watch("apellido");
    return (
        <div className="personal-info">
            <div
                className="profile-pictures"
                style={{
                    backgroundImage: `url(${bannerImg})`,
                }}
            >
                <div className="profile-picture">
                    {/* <IconoirProvider>
                        <ProfileCircle
                            width={"20 em"}
                            height={"20 em"}
                            strokeWidth={0.75}
                        />
                    </IconoirProvider> */}
                    <Avvvatars
                        border
                        size={92}
                        value="a"
                        displayValue={`${nombre[0]}${apellido[0]}`}
                    />
                </div>
            </div>
            <div className="input-container">
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
                    type="password"
                    validations={{
                        required: errMsgRequired,
                    }}
                />

                <Input
                    id="ci"
                    label="Carnet de Identidad"
                    type="number"
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
        </div>
    );
}

function ProfesionalInfo() {
    const { register } = useFormContext();
    return (
        <div className="profesional-info">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
                id="descripcion"
                {...register("descripcion", {
                    required: errMsgRequired,
                })}
            ></textarea>

            <label htmlFor="habilidades">Habilidades</label>
            <textarea
                id="habilidades"
                {...register("descripcion", {
                    required: errMsgRequired,
                })}
            ></textarea>
        </div>
    );
}

export default SignUpForm;
