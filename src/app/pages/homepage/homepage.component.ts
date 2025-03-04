import { Component } from '@angular/core';
import { ChatBotComponent } from '../../components/chat-bot/chat-bot.component';
import { VapiBtnComponent } from '../../components/vapi-btn/vapi-btn.component';
@Component({
  selector: 'app-homepage',
  imports: [ChatBotComponent, VapiBtnComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent {}
