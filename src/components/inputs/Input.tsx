import { useState } from "react";
import { useFormContext } from "react-hook-form";
import { IconoirProvider, EyeEmpty, EyeOff } from "iconoir-react";
import ErrMsg from "../errors/ErrMsg";

type MainInputProps = {
    id: string;
    label: string;
    type: string;
    validations?: {
        required?: string;
        pattern?: {
            value: RegExp;
            message: string;
        };
    };
};

type InputProps = {
    id: string;
    validations?: {
        required?: string;
        pattern?: {
            value: RegExp;
            message: string;
        };
    };
    value?: string;
};

function Input({ id, label, type, validations }: MainInputProps) {
    const {
        formState: { errors },
    } = useFormContext();

    return (
        <div className="input">
            <label htmlFor={id}>{label}</label>
            {type === "text" ? (
                <TextInput id={id} validations={validations} value="" />
            ) : (
                <PasswordInput id={id} validations={validations} />
            )}
            <ErrMsg errors={errors[id]} />
        </div>
    );
}

function TextInput({ id, validations, value }: InputProps) {
    const { register } = useFormContext();
    return (
        <input
            type="text"
            {...register(id, validations)}
            defaultValue={value}
        />
    );
}

function PasswordInput({ id, validations }: InputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const { register } = useFormContext();
    return (
        <div className="password">
            <input
                type={showPassword ? "text" : "password"}
                {...register(id, validations)}
            />
            <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
            >
                <IconoirProvider>
                    {showPassword ? <EyeEmpty /> : <EyeOff />}
                </IconoirProvider>
            </button>
        </div>
    );
}

export default Input;
