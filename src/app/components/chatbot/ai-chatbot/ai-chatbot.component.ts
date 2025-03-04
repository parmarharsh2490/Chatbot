import { AfterViewInit, Component, EventEmitter, Output } from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-ai-chatbot',
  imports: [ButtonModule],
  templateUrl: './ai-chatbot.component.html',
  styleUrl: './ai-chatbot.component.css',
})
export class AiChatbotComponent {
  @Output() toggleUserChatbot = new EventEmitter<void>();

  onToggle() {
    this.toggleUserChatbot.emit();
  }
}
