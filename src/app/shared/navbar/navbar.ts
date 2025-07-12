import { Component, ViewChild, ElementRef } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.scss'],
})
export class Navbar {
  @ViewChild('scrollContainer', { static: false }) scrollContainer!: ElementRef;

  navItems = [
    { label: 'Dashboard', icon: 'dashboard', path: '/' },
    { label: 'Accounts', icon: 'accounts', path: '/account' },
    { label: 'Brokers', icon: 'brokers', path: '#' },
    { label: 'Submissions', icon: 'submissions', path: '#' },
    { label: 'Organizations', icon: 'organizations', path: '#' },
    { label: 'Goals & Rules', icon: 'goals', path: '#' },
    { label: 'Admin', icon: 'admin', path: '#' },
    { label: 'Admin', icon: 'admin', path: '#' },
    { label: 'Admin', icon: 'admin', path: '#' },
    { label: 'Admin', icon: 'admin', path: '#' },
    { label: 'Admin', icon: 'admin', path: '#' },
    { label: 'Admin', icon: 'admin', path: '#' },
  ];

  scrollLeft() {
    this.scrollContainer.nativeElement.scrollBy({ left: -150, behavior: 'smooth' });
  }

  scrollRight() {
    this.scrollContainer.nativeElement.scrollBy({ left: 150, behavior: 'smooth' });
  }
}
