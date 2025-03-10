import { ChatBotComponent } from '../../components/chat-bot/chat-bot.component';
import { VapiBtnComponent } from '../../components/vapi-btn/vapi-btn.component';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Select } from 'primeng/select';
import { Agent } from '../../interface/agent';
import { SidebarComponent } from "../../components/sidebar/sidebar.component";
@Component({
  selector: 'app-homepage',
  standalone : true,
  imports: [ChatBotComponent, VapiBtnComponent, FormsModule, Select, SidebarComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css',
})
export class HomepageComponent implements OnInit{
  agents: Agent[] | undefined;
  loading: boolean = false;
  selectedAgent: any | undefined;

  ngOnInit() {
      this.agents = [
          { name: 'New York', id: 'NY' },
          { name: 'Rome', id: 'RM' },
          { name: 'London', id: 'LDN' },
          { name: 'Istanbul', id: 'IST' },
          { name: 'Paris', id: 'PRS' }
      ];
  }
}
