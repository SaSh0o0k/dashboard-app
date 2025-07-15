import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { account } from '../../../data/account/account-header.json';

@Component({
  selector: 'app-account-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './account-header.html',
  styleUrls: ['./account-header.scss']
})
export class AccountHeader {
  account = account;
}
