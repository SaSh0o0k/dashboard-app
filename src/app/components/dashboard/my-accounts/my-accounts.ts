import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-my-accounts',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './my-accounts.html',
  styleUrl: './my-accounts.scss',
})
export class MyAccounts {
  filter = '';
  accounts = [
    { name: 'Account A', status: 'Active', tier: 'Gold' },
    { name: 'Account B', status: 'Inactive', tier: 'Silver' },
    { name: 'Account C', status: 'Pending', tier: 'Bronze' },
  ];

  get filteredAccounts() {
    const f = this.filter.trim().toLowerCase();
    return this.accounts.filter(acc => acc.name.toLowerCase().includes(f));
  }
}
