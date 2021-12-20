import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TravelsComponent } from './components/travels/travels.component';
import { HistoryComponent } from './components/history/history.component';
import { ClientesComponent } from './components/clientes/clientes.component';

const routes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'dash/inicio', component:DashboardComponent},
  {path:'dash/clientes', component:ClientesComponent},
  {path:'dash/viajes', component:TravelsComponent},
  {path:'dash/historial', component:HistoryComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
