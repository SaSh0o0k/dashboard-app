import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import details from '../../../data/account-details.json';

@Component({
  selector: 'app-account-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-details.html',
  styleUrl: './account-details.scss'
})
export class AccountDetails {
  details = details;
  positionData = [
    { label: 'Your score', value: 82 },
    { label: 'Market Avg', value: 68 },
    { label: 'Top competitor', value: 88 }
  ];
  hasActive(index: number): boolean {
    return index === 0;
  }

  getScoreRating(score: number): string {
    if (score >= 80) return 'Very Strong';
    if (score >= 60) return 'Strong';
    if (score >= 40) return 'Medium';
    if (score >= 20) return 'Low';
    return 'Weak';
  }

  getFilledDots(score: number): boolean[] {
    const thresholds = [20, 40, 60, 80];
    return thresholds.map(t => score >= t);
  }

  getBarWidth(value: number): number {
    return Math.abs(value) * 2.5;
  }
}
