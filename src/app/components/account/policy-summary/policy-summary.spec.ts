import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicySummary } from './policy-summary';

describe('PolicySummary', () => {
  let component: PolicySummary;
  let fixture: ComponentFixture<PolicySummary>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicySummary]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicySummary);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
