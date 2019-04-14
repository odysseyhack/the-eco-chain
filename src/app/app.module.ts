import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HeaderComponent } from './shared/header/header.component';
import { FormComponent } from './farmer-dashboard/form/form.component';
import { SidenavComponent } from './farmer-dashboard/sidenav/sidenav.component';
import { NgxGoogleMapModule } from 'ngx-google-map';
import { Ng2GoogleChartModule } from 'ng2-googlechart';
import { HomeComponent } from './home/home.component';
import { ClaimsComponent } from './farmer-dashboard/claims/claims.component';
import { BenchmarkComponent } from './farmer-dashboard/benchmark/benchmark.component';
import { ChartModule, HIGHCHARTS_MODULES } from 'angular-highcharts';
import more from 'highcharts/highcharts-more.src';
import exporting from 'highcharts/modules/exporting.src';
import stock from 'highcharts/modules/stock.src';

@NgModule({
  declarations: [
    AppComponent,
    FarmerDashboardComponent,
    UserDashboardComponent,
    HeaderComponent,
    FormComponent,
    SidenavComponent,
    HomeComponent,
    ClaimsComponent,
    BenchmarkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    NgxGoogleMapModule,
    Ng2GoogleChartModule,
    ChartModule
  ],
  providers: [{ provide: HIGHCHARTS_MODULES, useFactory: () => [stock, more, exporting] }],
  bootstrap: [AppComponent]
})
export class AppModule {}
