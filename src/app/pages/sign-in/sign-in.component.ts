import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Form } from '../../shared/abstract/form.abstract';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule,
    InputTextModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css',
})
export class SignInComponent extends Form implements OnInit {
  ngOnInit() {
    this.loadGoogleLoginScript();
  }

  constructor() {
    super('sign-in');
  }
}
