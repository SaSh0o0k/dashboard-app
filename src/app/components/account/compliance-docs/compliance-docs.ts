import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compliance-docs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './compliance-docs.html',
  styleUrl: './compliance-docs.scss'
})
export class ComplianceDocs {
  docs = [
    'KYC verification',
    'Required Documentation',
    'Regulatory approval',
    'Financial Verification'
  ];
}
