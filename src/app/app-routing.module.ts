import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { FarmerDashboardComponent } from "./farmer-dashboard/farmer-dashboard.component";
import { UserDashboardComponent } from "./user-dashboard/user-dashboard.component";

const routes: Routes = [
  {
    path: "farmer",
    component: FarmerDashboardComponent,
    children: []
  },
  {
    path: "user",
    component: UserDashboardComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
