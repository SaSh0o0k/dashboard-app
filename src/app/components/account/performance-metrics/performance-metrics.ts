import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import metrics from '../../../data/performance-metrics.json';

@Component({
  selector: 'app-performance-metrics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './performance-metrics.html',
  styleUrl: './performance-metrics.scss'
})
export class PerformanceMetrics {
  metrics = metrics;
}
