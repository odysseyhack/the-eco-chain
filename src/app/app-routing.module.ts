import { ClaimsComponent } from './farmer-dashboard/claims/claims.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './farmer-dashboard/form/form.component';
import { BenchmarkComponent } from './farmer-dashboard/benchmark/benchmark.component';

const routes: Routes = [
  {
    path: 'farmer',
    component: FarmerDashboardComponent,
    children: [
      {
        path: 'claims',
        component: ClaimsComponent,
      },
      {
        path: 'benchmark',
        component: BenchmarkComponent,
      },
      {
        path: 'form',
        component: FormComponent,
      },
    ]
  },
  {
    path: 'user/:id',
    component: UserDashboardComponent,
  },
  {
    path: '',
    component: HomeComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
