import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Form } from '../../shared/abstract/form.abstract';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  imports: [
    CommonModule,
    InputTextModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignUpComponent extends Form implements OnInit {
  ngOnInit() {
    this.loadGoogleLoginScript();
  }

  constructor() {
    super('sign-up');
  }
}
