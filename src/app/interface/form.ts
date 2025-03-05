import { FormGroup } from "@angular/forms";

export interface SignupForm {
}
export interface LoginForm {
}
export interface IForm {
    readonly formData : FormGroup;
    resetForm : () => void;
    isValidForm : () => boolean;
    nameError : () => string;
    passwordError : () => string;
    emailError : () => string;
}
