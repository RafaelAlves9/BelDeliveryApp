export type IMessengeValidationResponse = {
    isValide: boolean;
    messenge: string;
    errorType: EValidationError;
};
export enum EValidationError {
    NotError=1,
    minLength,
    maxLength,
    required,
    email,
    password,
};

const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const minLengthDefault = 3;
const maxLengthDefault = 100;
const messengeList = {
    minLengthInvalid: `Mínimo de ${minLengthDefault} caracteres`,
    maxLengthInvalid: `Máximo de ${maxLengthDefault} caracteres`,
    required: `Campo obrigatório`,
    emailInvalid: `Digite um email válido`,
    passwordInvalid: `Digite uma senha válida`,
};

const text = (
    value: string | undefined,
    required: boolean | undefined = true,
    minLength: number | undefined = minLengthDefault,
    maxLength: number | undefined = maxLengthDefault,
): IMessengeValidationResponse => {
    const result: IMessengeValidationResponse = {
        isValide: true,
        messenge: "",
        errorType: EValidationError.NotError
    };
    if(value === undefined) value = "";

    if(required && value.length === 0){
        result.isValide = false;
        result.messenge = messengeList.required;
    }
    else if(value.length < minLength){
        result.isValide = false;
        result.messenge = messengeList.minLengthInvalid;
    }
    else if(value.length > maxLength){
        result.isValide = false;
        result.messenge = messengeList.maxLengthInvalid;
    };

    return result;
};

const email = (
    value: string | undefined,
    required: boolean | undefined = true
): IMessengeValidationResponse => {
    const result: IMessengeValidationResponse = {
        isValide: true,
        messenge: "",
        errorType: EValidationError.NotError
    };
    if(value === undefined) value = "";

    if(required && value.length === 0){
        result.isValide = false;
        result.messenge = messengeList.required;
    }
    else if(!regexEmail.test(value)){
        result.isValide = false;
        result.messenge = messengeList.emailInvalid;
    }

    return result;
};

const password = (
    value: string,
    required: boolean | undefined = true,
    minLength: number | undefined = minLengthDefault,
    maxLength: number | undefined = maxLengthDefault,
): IMessengeValidationResponse => {
    const result: IMessengeValidationResponse = {
        isValide: true,
        messenge: "",
        errorType: EValidationError.NotError
    };
    if(value === undefined) value = "";

    if(required && value.length === 0){
        result.isValide = false;
        result.messenge = messengeList.required;
    }
    else if(value.length < minLength){
        result.isValide = false;
        result.messenge = messengeList.minLengthInvalid;
    }
    else if(value.length > maxLength){
        result.isValide = false;
        result.messenge = messengeList.maxLengthInvalid;
    };

    return result;
};

export const validation = {
    text, email, password
};
