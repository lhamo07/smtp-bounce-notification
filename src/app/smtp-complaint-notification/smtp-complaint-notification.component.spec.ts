import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpComplaintNotificationComponent } from './smtp-complaint-notification.component';

describe('SmtpComplaintNotificationComponent', () => {
  let component: SmtpComplaintNotificationComponent;
  let fixture: ComponentFixture<SmtpComplaintNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmtpComplaintNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmtpComplaintNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
