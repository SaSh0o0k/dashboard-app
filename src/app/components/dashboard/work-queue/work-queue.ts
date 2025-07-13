import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from '../../../data/work-queue.json';

@Component({
  selector: 'app-work-queue',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './work-queue.html',
  styleUrl: './work-queue.scss',
})

export class WorkQueue {
  selectedTab = 'Assigned';

  tabs = [
    { key: 'Assigned', label: 'Assigned to me', count: 12 },
    { key: 'Pending', label: 'Pending Review', count: 8 },
    { key: 'Referrals', label: 'Referrals', count: 3 },
  ];

  rows = data;

  get filteredRows() {
    return this.rows.filter((row) => row.tab === this.selectedTab);
  }

  getInitials(name: string): string {
    return name
      .split(' ')
      .map(part => part[0])
      .join('')
      .toUpperCase();
  }
}
