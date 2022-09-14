import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateBinding } from '@angular/compiler';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { SmtpBounceNotificationComponent } from './smtp-bounce-notification/smtp-bounce-notification.component';
import { SmtpComplaintNotificationComponent } from './smtp-complaint-notification/smtp-complaint-notification.component';
import { SmtpDeliveryNotificationComponent } from './smtp-delivery-notification/smtp-delivery-notification.component';
import { SearchFilterPipe } from './search-filter.pipe';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    SmtpBounceNotificationComponent,
    SmtpComplaintNotificationComponent,
    SmtpDeliveryNotificationComponent,
    SearchFilterPipe,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
