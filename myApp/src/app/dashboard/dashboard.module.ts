import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { DashboardComponent }from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardService } from './dashboard.service';

@NgModule({
  imports: [
    DataTablesModule,
    CommonModule,
    HttpClientModule,
    DashboardRoutingModule,
  ],
  providers:[DashboardService],
  declarations: [DashboardComponent]
})
export class DashboardModule { }
