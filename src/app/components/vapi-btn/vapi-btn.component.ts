import { Component, inject, signal } from '@angular/core';
import Vapi from '@vapi-ai/web';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { Toast } from '../../shared/services/toast.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-vapi-btn',
  imports: [ButtonModule, CommonModule],
  templateUrl: './vapi-btn.component.html',
  styleUrl: './vapi-btn.component.css',
})
export class VapiBtnComponent {
  vapi: any;
  ngOnInit(): void {
    this.vapi = new Vapi('64f975f5-3e04-4c9b-887f-80bcbe32b0fc');
  }
  toastService = inject(Toast);
  status = signal('Start Call');
  async startCall() {
    try {
      this.status.set('Processing');
      await this.vapi.start('cf0700b1-6a02-49ac-b7fb-057407868826');
      this.status.set('End Call');
      this.toastService.showSuccessToast('Successfully Call Started');
    } catch (error) {
      this.toastService.showErrorToast('Fail To Start Call');
    }
  }
  async endCall() {
    try {
      this.vapi.stop();
      this.status.set('Start Call');
      this.toastService.showSuccessToast('Successfully Call Ended.');
    } catch (error) {
      this.toastService.showErrorToast('Fail To End Call');
    }
  }
}
