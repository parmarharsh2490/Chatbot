import { Component } from '@angular/core';
import { SignInComponent } from "../sign-in/sign-in.component";
import { GoogleLoginComponent } from "../../components/google-login/google-login.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-auth',
  imports: [RouterModule , GoogleLoginComponent],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css'
})
export class AuthComponent {

}
