import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
})
export class Header {
  user = {
    name: 'Arthur',
    initials: 'AR',
    openTasks: 12,
  };
}
