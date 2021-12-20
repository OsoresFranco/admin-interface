import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientesComponent } from './dashboard/components/clientes/clientes.component';
import { HistoryComponent } from './dashboard/components/history/history.component';
import { TravelsComponent } from './dashboard/components/travels/travels.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path: 'dash', loadChildren:() => import('./dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path:'viajes', component: TravelsComponent},
  {path:'clientes', component: ClientesComponent},
  {path:'historial', component: HistoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
