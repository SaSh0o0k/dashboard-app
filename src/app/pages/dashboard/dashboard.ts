import { Component } from '@angular/core';
import { WorkQueue } from '../../components/dashboard/work-queue/work-queue';
import { PortfolioGoals } from '../../components/dashboard/portfolio-goals/portfolio-goals';
import { QuickActions } from '../../components/dashboard/quick-actions/quick-actions';
import { MarketIntelligence } from '../../components/dashboard/market-intelligence/market-intelligence';
import { MyAccounts } from '../../components/dashboard/my-accounts/my-accounts';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    WorkQueue,
    PortfolioGoals,
    QuickActions,
    MarketIntelligence,
    MyAccounts
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss'
})
export class Dashboard {

}
