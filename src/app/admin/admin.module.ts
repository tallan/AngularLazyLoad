import { NgModule } from '@angular/core';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { AdminService } from './services/admin.service';

@NgModule({
  declarations: [
    AdminComponent
  ],
  imports: [
    AdminRoutingModule
  ],
  providers: [AdminService]
})
export class AdminModule { }
