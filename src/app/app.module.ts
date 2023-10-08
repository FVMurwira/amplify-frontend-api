import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
// import { SharedService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SupportComponent } from './support/support.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';
import { LoadingService } from './loading.service';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignUpComponent,
    HomeComponent,
    SupportComponent,
    ContactUsComponent,
    FooterComponent,
    HeaderComponent,
    LoadingIndicatorComponent,
    

  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatSnackBarModule,
    AppRoutingModule,
    HttpClientModule,
    AmplifyAuthenticatorModule,
    BrowserAnimationsModule,
    

  ],
  providers: [LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
// SharedService
