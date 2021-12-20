import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MaterialModule } from '../material/material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TravelsComponent } from './components/travels/travels.component';
import { HistoryComponent } from './components/history/history.component';
import { ClientesComponent } from './components/clientes/clientes.component';
import { CadeteTableComponent } from './components/cadete-table/cadete-table.component';
import { ClientTableComponent } from './components/client-table/client-table.component';
import { AdminTableComponent } from './components/admin-table/admin-table.component';




@NgModule({
  declarations: [
    DashboardComponent,
    SidenavComponent,
    RegisterComponent,
    TravelsComponent,
    HistoryComponent,
    ClientesComponent,
    CadeteTableComponent,
    ClientTableComponent,
    AdminTableComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class DashboardModule { }
