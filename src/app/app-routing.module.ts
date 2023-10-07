import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { SupportComponent } from './support/support.component';
import { FooterComponent } from './footer/footer.component';
import { LoadingIndicatorComponent } from './loading-indicator/loading-indicator.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'contact-us',component:ContactUsComponent},
  {path:'support',component:SupportComponent},
  {path:'header',component:HomeComponent},
  {path:'footer',component:FooterComponent},
  {path:'loading',component:LoadingIndicatorComponent},
  {path:'home',component:HomeComponent}

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
