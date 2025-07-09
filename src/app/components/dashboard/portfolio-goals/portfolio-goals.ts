import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-goals.html',
  styleUrl: './portfolio-goals.scss',
})
export class PortfolioGoals {
  goals = [
    { name: 'Retirement Fund', progress: 75 },
    { name: 'Emergency Savings', progress: 40 },
    { name: 'Vacation Budget', progress: 90 },
  ];
}
