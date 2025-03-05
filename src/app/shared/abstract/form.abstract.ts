import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IForm } from '../../interface/form';
import { inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Toast } from '../services/toast.service';
declare global {
  interface Window {
    handleGoogleSignIn: (response: any) => void;
  }
}

export abstract class Form implements IForm {
  httpService = inject(HttpClient);
  toastService = inject(Toast);
  action: string = '';
  submitForm() {
    this.httpService.post(`/${this.action}`, this.formData).subscribe(() => {
      this.toastService.showSuccessToast('Successfully Register');
    });
  }
  formData!: FormGroup;
  constructor(action: string) {
    this.action = action;
    this.updateFormData();
  }
  updateFormData() {
    if (this.action === 'sign-up') {
      this.formData = new FormGroup({
        name: new FormControl('', [Validators.required, Validators.minLength(2)]),
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      });
    } else if (this.action == 'sign-in') {
      this.formData = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(8)]),
      });
    } else {
      this.toastService.showErrorToast('Something Wrong Happened!');
    }
  }
  showPassword: boolean = false;
  toggleShowPassword() {
    this.showPassword = !this.showPassword;
  }
  resetForm() {
    this.formData.reset();
  }

  isValidForm(): boolean {
    return this.formData.valid;
  }
  emailError(): string {
    if (!this.formData.get('email')?.touched) return '';
    if (this.formData.get('email')?.errors?.['required']) {
      return 'Email Required';
    }
    if (this.formData.get('email')?.errors?.['email']) {
      return 'Email is not valid';
    }
    return '';
  }

  passwordError(): string {
    if (!this.formData.get('password')?.touched) return '';
    if (this.formData.get('password')?.errors?.['required']) {
      return 'Password is Required';
    }
    if (this.formData.get('password')?.errors?.['minlength']) {
      return 'Minimum length of password should be 8';
    }

    return '';
  }

  nameError(): string {
    if (!this.formData.get('name')?.touched) return '';
    if (this.formData.get('name')?.errors?.['required']) {
      return 'Name is Required';
    }
    if (this.formData.get('name')?.errors?.['minlength']) {
      return 'Minimum length of Name should be 2';
    }

    return '';
  }
  handleOauthResponse(response: any) {
    console.log('OAuth Response:', response);
  }
  loadGoogleLoginScript() {
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Create global callback handler
    window.handleGoogleSignIn = this.handleOauthResponse.bind(this);
  }
}
