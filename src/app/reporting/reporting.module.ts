import { NgModule } from '@angular/core';
import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportingComponent } from './components/reporting/reporting.component';
import { ReportingService } from './services/reporting.service';
import { ReportingDetailsComponent } from './components/reporting-details/reporting-details.component';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    ReportingComponent,
    ReportingDetailsComponent
  ],
  imports: [ReportingRoutingModule, MatButtonModule],
  providers: [ReportingService]
})
export class ReportingModule { }
