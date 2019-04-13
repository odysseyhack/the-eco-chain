import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { WizardComponent } from './farmer-dashboard/wizard/wizard.component';
import { FormComponent } from './farmer-dashboard/form/form.component';
import { SidenavComponent } from './farmer-dashboard/sidenav/sidenav.component';
import { NgxGoogleMapModule } from 'ngx-google-map';
import { Ng2GoogleChartModule } from 'ng2-googlechart';

@NgModule({
  declarations: [
    AppComponent,
    FarmerDashboardComponent,
    UserDashboardComponent,
    HeaderComponent,
    WizardComponent,
    FormComponent,
    SidenavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    NgxGoogleMapModule,
    Ng2GoogleChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
