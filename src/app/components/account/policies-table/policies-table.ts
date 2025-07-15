import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import policiesData from '../../../data/account/policies-table.json';

@Component({
  selector: 'app-policies-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './policies-table.html',
  styleUrl: './policies-table.scss'
})
export class PoliciesTable {
  policies = policiesData;

  getLossClass(ratio: number | null): string {
    if (ratio === null) return '';
    if (ratio <= 25) return 'green';
    if (ratio <= 60) return 'yellow';
    return 'red';
  }

  isPositiveRateChange(value: number | null): boolean {
    return value !== null && value > 5;
  }

  isNegativeRateChange(value: number | null): boolean {
    return value !== null && value > 5;
  }

  getTotal(key: string): number {
    return this.policies.reduce((acc, policy) => {
      const value = (policy as any)[key];
      return acc + (typeof value === 'number' ? value : 0);
    }, 0);
  }

  getAverage(key: string): string {
    const values = this.policies
      .map(policy => (policy as any)[key])
      .filter((val): val is number => val !== null && val !== undefined);

    if (values.length === 0) return 'N/A';

    const sum = values.reduce((acc, val) => acc + val, 0);
    const avg = sum / values.length;

    return avg.toFixed(1);
  }
}
