import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-market-intelligence',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './market-intelligence.html',
  styleUrl: './market-intelligence.scss',
})
export class MarketIntelligence {
  news = [
    {
      title: 'Tech stocks rally as earnings season begins',
      date: '2025-07-06',
      summary: 'Technology sector leads gains in early trading sessions...',
    },
    {
      title: 'Federal Reserve hints at rate pause',
      date: '2025-07-05',
      summary: 'Investors respond positively to cautious tone from Fed officials...',
    },
    {
      title: 'Oil prices dip amid global demand concerns',
      date: '2025-07-04',
      summary: 'Energy markets remain volatile as demand projections shift...',
    },
  ];
}
