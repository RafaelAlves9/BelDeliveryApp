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
export const MessengeList = {
    minLengthInvalid: `Mínimo de ${minLengthDefault} caracteres`,
    maxLengthInvalid: `Máximo de ${maxLengthDefault} caracteres`,
    required: `Campo obrigatório`,
    emailInvalid: `Digite um email válido`,
    passwordInvalid: `Digite uma senha válida`,
};

const number = (
    value: number | undefined,
    required: boolean | undefined = true,
    minLength: number | undefined = minLengthDefault,
    maxLength: number | undefined = maxLengthDefault,
): IMessengeValidationResponse => {
    const result: IMessengeValidationResponse = {
        isValide: true,
        messenge: "",
        errorType: EValidationError.NotError
    };
    if(value === undefined) value = 0;

    if(required && value === 0){
        result.isValide = false;
        result.messenge = MessengeList.required;
    }
    else if(minLength < value){
        result.isValide = false;
        result.messenge = MessengeList.minLengthInvalid;
    }
    else if(maxLength > value){
        result.isValide = false;
        result.messenge = MessengeList.maxLengthInvalid;
    };

    return result;
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
        result.messenge = MessengeList.required;
    }
    else if(value.length < minLength){
        result.isValide = false;
        result.messenge = MessengeList.minLengthInvalid;
    }
    else if(value.length > maxLength){
        result.isValide = false;
        result.messenge = MessengeList.maxLengthInvalid;
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
        result.messenge = MessengeList.required;
    }
    else if(!regexEmail.test(value)){
        result.isValide = false;
        result.messenge = MessengeList.emailInvalid;
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
        result.messenge = MessengeList.required;
    }
    else if(value.length < minLength){
        result.isValide = false;
        result.messenge = MessengeList.minLengthInvalid;
    }
    else if(value.length > maxLength){
        result.isValide = false;
        result.messenge = MessengeList.maxLengthInvalid;
    };

    return result;
};

export const validation = {
    text, email, password, number
};
