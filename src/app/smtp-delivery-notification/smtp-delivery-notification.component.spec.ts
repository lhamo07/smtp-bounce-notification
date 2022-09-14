import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmtpDeliveryNotificationComponent } from './smtp-delivery-notification.component';

describe('SmtpDeliveryNotificationComponent', () => {
  let component: SmtpDeliveryNotificationComponent;
  let fixture: ComponentFixture<SmtpDeliveryNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmtpDeliveryNotificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SmtpDeliveryNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
