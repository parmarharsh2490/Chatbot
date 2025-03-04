import { Directive } from '@angular/core';
import { MessageService } from 'primeng/api';
@Directive()
export abstract class Toast {
  constructor(private messageService: MessageService) {}
  showSuccessToast(message: string) {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }
  showErrorToast(message: string) {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }
  showInfoToast(message: string) {
    this.messageService.add({
      severity: 'info',
      summary: 'Information',
      detail: message,
    });
  }
  showWarnToast(message: string) {
    this.messageService.add({
      severity: 'warn',
      summary: 'Warning',
      detail: message,
    });
  }
}
