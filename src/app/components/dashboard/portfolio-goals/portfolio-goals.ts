import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import data from '../../../mock/portfolio-goals.json';
import targets from '../../../mock/portfolio-targets.json';

@Component({
  selector: 'app-portfolio-goals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio-goals.html',
  styleUrl: './portfolio-goals.scss',
})
export class PortfolioGoals {
  goals = data;
  targets = targets;
  newBusinessTarget = 47;
  annualGwpTarget = 68;
  
  getRangeWidth(goal: any, index: number): number {
    const [min, max] = goal.ranges;
    if (index === 0) return min; // зелена зона
    if (index === 1) return max - min; // жовта зона
    return 100 - max; // червона зона
  }

  getStatusClass(goal: any): string {
    const [min, max] = goal.ranges;
    if (goal.value < min) return 'green';
    if (goal.value <= max) return 'yellow';
    return 'red';
  }

  getStatusText(goal: any): string {
    const [min, max] = goal.ranges;
    if (goal.value < min) return 'GOOD';
    if (goal.value <= max) return 'MEDIUM';
    return 'BAD';
  }

  getPercentage(targets: any): number {
    return Math.round((targets.value / targets.target) * 100);
  }
}
