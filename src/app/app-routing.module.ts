import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { FirAccidentComponent } from './fir-accident/fir-accident.component';

const routes: Routes = [
  { path: '', redirectTo: 'fir-accident', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'fir-accident', component: FirAccidentComponent },
  { path: 'dashboard', loadChildren: 'app/dashboard/dashboard.module#DashboardModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
