import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/guards/auth.guard';
import { FirsService } from './services/firs/firs.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal/modal';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { PoliceStationsService } from './services/police-stations/police-stations.service';
import { StolenVehiclesService } from './services/stolen-vehicles/stolen-vehicles.service';
import { DeadBodiesService } from './services/dead-bodies/dead-bodies.service';
import { MissingPersonsService } from './services/missing-persons/missing-persons.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule.forRoot(),
    ModalDialogModule.forRoot(),
  ],
  providers: [
    AuthService,
    AuthGuard,
    FirsService,
    PoliceStationsService,
    StolenVehiclesService,
    DeadBodiesService,
    MissingPersonsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
