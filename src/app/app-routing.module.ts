import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FirAccidentComponent } from './fir-accident/fir-accident.component';
import { StolenVehiclesComponent } from './stolen-vehicles/stolen-vehicles.component';
import { DeadBodiesComponent } from './dead-bodies/dead-bodies.component';
import { MissingPersonsComponent } from './missing-persons/missing-persons.component';

const routes: Routes = [
  { path: '', redirectTo: 'fir-accident', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'fir-accident', component: FirAccidentComponent },
  { path: 'stolen-vehicles', component: StolenVehiclesComponent },
  { path: 'dead-bodies', component: DeadBodiesComponent },
  { path: 'missing-persons', component: MissingPersonsComponent },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
