import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

declare global {
  interface Window {
    handleGoogleSignIn: (response: any) => void;
  }
}

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent implements OnInit {
  ngOnInit() {
    // Add Google Sign-In script
    const script = document.createElement('script');
    script.src = 'https://accounts.google.com/gsi/client';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Create global callback handler
    window.handleGoogleSignIn = this.handleOauthResponse.bind(this);
  }

  handleOauthResponse(response: any) {
    console.log('OAuth Response:', response);
    // Process authentication response here
  }
}
