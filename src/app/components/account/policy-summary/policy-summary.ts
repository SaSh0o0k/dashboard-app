import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import policies from '../../../data/policy-summary.json';

@Component({
  selector: 'app-policy-summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './policy-summary.html',
  styleUrls: ['./policy-summary.scss']
})
export class PolicySummary implements AfterViewInit {
  policies = policies;

  @ViewChild('policiesContainer', { static: true }) policiesContainerRef!: ElementRef;

  private isDown = false;
  private startX = 0;
  private scrollLeft = 0;

  ngAfterViewInit() {
    const container = this.policiesContainerRef.nativeElement as HTMLElement;

    container.addEventListener('mousedown', (e: MouseEvent) => {
      this.isDown = true;
      container.classList.add('grabbing');
      this.startX = e.pageX - container.offsetLeft;
      this.scrollLeft = container.scrollLeft;
    });

    container.addEventListener('mouseleave', () => {
      this.isDown = false;
      container.classList.remove('grabbing');
    });

    container.addEventListener('mouseup', () => {
      this.isDown = false;
      container.classList.remove('grabbing');
    });

    container.addEventListener('mousemove', (e: MouseEvent) => {
      if (!this.isDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - this.startX);
      container.scrollLeft = this.scrollLeft - walk;
    });

    container.addEventListener('wheel', (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }, { passive: false });
  }
}
