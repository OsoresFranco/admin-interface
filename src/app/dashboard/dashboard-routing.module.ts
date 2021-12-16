import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TravelsComponent } from './components/travels/travels.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'playground', component:TravelsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
