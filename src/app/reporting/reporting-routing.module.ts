import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportingComponent } from './components/reporting/reporting.component';
import { ReportingDetailsComponent } from './components/reporting-details/reporting-details.component';

const routes: Routes = [
  {path: '', component: ReportingComponent},
  {path: 'details', component: ReportingDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReportingRoutingModule { }
