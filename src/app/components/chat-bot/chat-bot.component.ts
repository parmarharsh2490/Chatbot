import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserChatbotComponent } from '../user-chatbot/user-chatbot.component';
import { ButtonModule } from 'primeng/button';
import { VapiBtnComponent } from '../vapi-btn/vapi-btn.component';
import { AiChatbotComponent } from '../chatbot/ai-chatbot/ai-chatbot.component';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [
    FormsModule,
    UserChatbotComponent,
    ButtonModule,
    AiChatbotComponent,
  ],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.css',
})
export class ChatBotComponent implements OnInit {
  aiChatBot = false;
  showUserChatbot = false;

  toggleUserChatbot() {
    if (this.aiChatBot) {
      document.getElementById('chatbase-bubble-button')?.click();
      this.aiChatBot = false;

      setTimeout(() => {
        this.showUserChatbot = true;
      }, 300);
    } else {
      this.showUserChatbot = !this.showUserChatbot;
    }
  }

  toggleAIChatBot() {
    if (this.showUserChatbot) {
      this.showUserChatbot = false;

      setTimeout(() => {
        document.getElementById('chatbase-bubble-button')?.click();
        this.aiChatBot = true;
      }, 300);
    } else {
      this.aiChatBot = !this.aiChatBot;
    }
  }

  ngOnInit(): void {
    const observer = new MutationObserver(() => {
      const element = document.getElementById('chatbase-bubble-button');
      if (element) {
        element.addEventListener('click', () => this.toggleAIChatBot());
        observer.disconnect(); // Stop observing once found
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });
  }
}
