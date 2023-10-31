import { useForm } from "react-hook-form";
import { AuthenticationService } from "@service/Authentication.service";
import { useNavigate } from "react-router-dom";
import { toastMessage } from "@utils/toastMessage";
import { useDispatch } from "react-redux";
import { setLoading } from "@store/reducers/loading/loadingSlice";
import { TRegisterUserSchema } from "@request/UserSchema";

export interface IFormValue {
    name: string;
    email: string;
    cellPhone: string;
    password: string;
    confirmPassword: string;
};

const UseRegisterController = () => {
    const authenticationService = new AuthenticationService();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { watch, register, handleSubmit, formState: {errors} } = useForm<IFormValue>({
        defaultValues: {
            name: "",
            email: "",
            cellPhone: "",
            password: "",
            confirmPassword: ""
        }
    });
    
    const onSubmit = async () => {
        dispatch(setLoading(true));
        await authenticationService.registerUserWithEmailAndPassword(watch("email"), watch("password"))
        .then(async (res) => {
            if(typeof res == "string"){
                const body = bodyRegisterPost();
                body.id_user = res;
                const result = await authenticationService.registerClientProfile(body);
                if(!!result) {
                    navigate("/login");
                    toastMessage("Cadastro feito com sucesso", "success");
                };
            }else {
                toastMessage("Algum erro ocorreu", "error");
            };
        })
        .finally(() => {
            dispatch(setLoading(false));
        });
    };
    
    const bodyRegisterPost = (): TRegisterUserSchema => {
        const body: TRegisterUserSchema = {
            cellPhone: watch("cellPhone"),
            createdDate: new Date(),
            dateOfBirth: null,
            email: watch("email"),
            gender: null,
            inactiveDate: null,
            userName: watch("name"),
            isActive: true,
            id_user: ""
        };
        return body;
    };

    return {
        Actions: {
            handleSubmit: handleSubmit,
            onSubmit: onSubmit,
        },
        States: {
            errors: errors,
            watch: watch,
        },
        Setters: {
            register: register
        },
    };
};

export default UseRegisterController;
