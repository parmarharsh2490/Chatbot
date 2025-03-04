import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ChatLoaderComponent } from '../chatbot/chat-loader/chat-loader.component';
import { InputTextModule } from 'primeng/inputtext';
@Component({
  selector: 'app-user-chatbot',
  imports: [CommonModule, ChatLoaderComponent, InputTextModule],
  templateUrl: './user-chatbot.component.html',
  styleUrl: './user-chatbot.component.css',
})
export class UserChatbotComponent {
  loading = false;
  @Input() showUserChatbot: boolean = false;
}
