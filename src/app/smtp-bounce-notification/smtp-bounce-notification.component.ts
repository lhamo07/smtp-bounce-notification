import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-smtp-bounce-notification',
  templateUrl: './smtp-bounce-notification.component.html',
  styleUrls: ['./smtp-bounce-notification.component.css'],
})
export class SmtpBounceNotificationComponent implements OnInit {
  bounceData: any = [];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getBounceNotification();
  }
  getBounceNotification() {
    this.apiService.smtpBounceNotification().subscribe((res) => {
      this.bounceData = res.delivered;
      console.log(this.bounceData);
    });
  }
}
