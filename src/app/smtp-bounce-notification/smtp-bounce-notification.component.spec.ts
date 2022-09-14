import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpBounceNotificationComponent } from './smtp-bounce-notification.component';

describe('SmtpBounceNotificationComponent', () => {
  let component: SmtpBounceNotificationComponent;
  let fixture: ComponentFixture<SmtpBounceNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmtpBounceNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmtpBounceNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
