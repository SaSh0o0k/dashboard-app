import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quick-actions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quick-actions.html',
  styleUrl: './quick-actions.scss',
})
export class QuickActions {
  actions = [
    { label: 'New Submission' },
    { label: 'Quote Builder'},
    { label: 'Risks Models'},
    { label: 'Documents Upload'}
  ];

  doAction(label: string) {
    alert(`Action: ${label}`);
  }
}
