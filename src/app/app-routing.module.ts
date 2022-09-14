import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CodeComponent } from './code/code.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SmtpBounceNotificationComponent } from './smtp-bounce-notification/smtp-bounce-notification.component';
import { SmtpComplaintNotificationComponent } from './smtp-complaint-notification/smtp-complaint-notification.component';
import { SmtpDeliveryNotificationComponent } from './smtp-delivery-notification/smtp-delivery-notification.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'bounce', component: SmtpBounceNotificationComponent },
  { path: 'complaint', component: SmtpComplaintNotificationComponent },
  { path: 'delivery', component: SmtpDeliveryNotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
