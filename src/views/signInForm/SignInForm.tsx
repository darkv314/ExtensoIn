import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import Input from "../../components/inputs/Input";
import "./SignInForm.css";
import MainButton from "../../components/buttons/MainButton";
import {
    errMsgRequired,
    errMsgEmail,
    EMAIL_CHECK,
} from "../../helpers/helpers";
import { useMutation } from "@tanstack/react-query";
import postData from "../../api/PostData";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

type FormValues = {
    email: string;
    password: string;
};

function SignInForm() {
    const navigate = useNavigate();
    //@ts-ignore
    const { setAuth } = useAuth();
    const methods = useForm<FormValues>();

    const mutation = useMutation({
            mutationFn: (loginInfo) => {
                return postData('api/auth/login', loginInfo)
            },
            onSuccess: (data) => {
                console.log(data)
                setAuth({
                    authToken: data.data.token,
                    ...data.data.user
                })
                navigate('/feed')
            }
        })
    

    const onSubmit: SubmitHandler<any> =  (data) => {
         mutation.mutate({...data});
    }

    return (
        <div className="sign-in-form">
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <h1>Bienvenid@</h1>
                    <div className="sign-in-container">
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
