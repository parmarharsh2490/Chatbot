
import { Component } from '@angular/core';
import { SidebarModule } from 'primeng/sidebar';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-sidebar',
  imports: [SidebarModule, ButtonModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  sidebarVisible: boolean = false;
}
