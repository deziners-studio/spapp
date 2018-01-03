import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { IntroComponent } from './intro/intro.component';
import { FirComponent } from './fir/fir.component';
import { AccidentComponent } from './accident/accident.component';
import { EditFirComponent } from './edit-fir/edit-fir.component';
import { StolenVehiclesComponent } from './stolen-vehicles/stolen-vehicles.component';
import { DeadBodiesComponent } from './dead-bodies/dead-bodies.component';
import { MissingPersonsComponent } from './missing-persons/missing-persons.component';
import { AddFirsComponent } from './add-firs/add-firs.component';
import { AddAccidentInformationComponent } from './add-accident-information/add-accident-information.component';
import { AddStolenVehiclesComponent } from './add-stolen-vehicles/add-stolen-vehicles.component';
import { AddDeadBodiesComponent } from './add-dead-bodies/add-dead-bodies.component';
import { AddMissingPersonsComponent } from './add-missing-persons/add-missing-persons.component';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot()
  ],
  declarations: [
    DashboardHomeComponent,
    IntroComponent,
    FirComponent,
    AccidentComponent,
    EditFirComponent,
    StolenVehiclesComponent,
    DeadBodiesComponent,
    MissingPersonsComponent,
    AddFirsComponent,
    AddAccidentInformationComponent,
    AddStolenVehiclesComponent,
    AddDeadBodiesComponent,
    AddMissingPersonsComponent,
    UsersComponent,
    AddUserComponent
  ],
  entryComponents: [EditFirComponent]
})
export class DashboardModule { }
