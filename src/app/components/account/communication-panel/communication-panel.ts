import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import messages from '../../../data/account/communication-panel.json';

@Component({
  selector: 'app-communication-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './communication-panel.html',
  styleUrl: './communication-panel.scss'
})
export class CommunicationPanel {
  messages = messages;
}
