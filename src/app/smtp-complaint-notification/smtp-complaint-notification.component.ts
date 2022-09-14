import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../service/api-service.service';

@Component({
  selector: 'app-smtp-complaint-notification',
  templateUrl: './smtp-complaint-notification.component.html',
  styleUrls: ['./smtp-complaint-notification.component.css'],
})
export class SmtpComplaintNotificationComponent implements OnInit {
  complaintData: any = [];

  constructor(private apiService: ApiServiceService) {}

  ngOnInit(): void {
    this.getSMTPComplaintNotifications();
  }
  getSMTPComplaintNotifications() {
    this.apiService.SMTPComplaintNotifications().subscribe((res) => {
      this.complaintData = res.delivered;
    });
  }
}
