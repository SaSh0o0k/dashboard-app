import { Component } from '@angular/core';
import { AccountHeader } from '../../components/account/account-header/account-header';
import { AccountDetails } from '../../components/account/account-details/account-details';
import { CommunicationPanel } from '../../components/account/communication-panel/communication-panel';
import { ComplianceDocs } from '../../components/account/compliance-docs/compliance-docs';
import { PerformanceMetrics } from '../../components/account/performance-metrics/performance-metrics';
import { PolicySummary } from '../../components/account/policy-summary/policy-summary';
import { PoliciesTable } from '../../components/account/policies-table/policies-table';
import { StatusProgress } from '../../components/account/status-progress/status-progress';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    AccountHeader,
    AccountDetails,
    CommunicationPanel,
    ComplianceDocs,
    PerformanceMetrics,
    PolicySummary,
    PoliciesTable,
    StatusProgress
  ],
  templateUrl: './account.html',
  styleUrl: './account.scss'
})
export class Account {

}
