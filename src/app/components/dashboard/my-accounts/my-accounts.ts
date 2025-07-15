import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import rows from '../../../data/dashboard/my-accounts.json';

@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-accounts.html',
  styleUrl: './my-accounts.scss',
})
export class MyAccounts {
  rows = rows;

  getLossColor(loss: number): string {
    if (loss >= 66) return 'red';
    if (loss >= 33) return 'yellow';
    return 'green';
  }

  getWinnabilityDots(level: number): number[] {
    return Array(level).fill(0);
  }

  getEmptyDots(level: number): number[] {
    return Array(4 - level).fill(0);
  }
}
