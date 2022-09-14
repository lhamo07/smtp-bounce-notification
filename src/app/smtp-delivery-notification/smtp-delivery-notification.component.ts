import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-smtp-delivery-notification',
  templateUrl: './smtp-delivery-notification.component.html',
  styleUrls: ['./smtp-delivery-notification.component.css'],
})
export class SmtpDeliveryNotificationComponent implements OnInit {
  deliveryData: any = [];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getSMTPDeliveryNotification();
  }
  getSMTPDeliveryNotification() {
    this.apiService.SMTPDeliveryNotifications().subscribe((res) => {
      this.deliveryData = res.delivered;
    });
  }
}
