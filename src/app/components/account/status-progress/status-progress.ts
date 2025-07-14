import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-status-progress',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './status-progress.html',
  styleUrl: './status-progress.scss'
})
export class StatusProgress {
  steps = [
    'Submitted',
    'Review',
    'Quote',
    'Bind',
    'Issue',
    'Renew'
  ];

  currentStepIndex = 4;
}
