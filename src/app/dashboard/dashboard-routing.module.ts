import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalDialogModule } from 'ngx-modal-dialog';

import { Routes, RouterModule } from '@angular/router';
import { DashboardHomeComponent } from './dashboard-home/dashboard-home.component';
import { AuthGuard } from '../auth/guards/auth.guard';
import { IntroComponent } from './intro/intro.component';
import { FirComponent } from './fir/fir.component';
import { AccidentComponent } from './accident/accident.component';
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

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: IntroComponent },
      { path: 'fir', component: FirComponent },
      { path: 'fir/add', component: AddFirsComponent },
      { path: 'accident-information', component: AccidentComponent },
      { path: 'accident-information/add', component: AddAccidentInformationComponent },
      { path: 'stolen-vehicles', component: StolenVehiclesComponent },
      { path: 'stolen-vehicles/add', component: AddStolenVehiclesComponent },
      { path: 'dead-bodies', component: DeadBodiesComponent },
      { path: 'dead-bodies/add', component: AddDeadBodiesComponent },
      { path: 'missing-persons', component: MissingPersonsComponent },
      { path: 'missing-persons/add', component: AddMissingPersonsComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/add', component: AddUserComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    NgbModule,
    ModalDialogModule
  ],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
