import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliceStationsService } from '../../services/police-stations/police-stations.service';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  @ViewChild('fileInput') fileInput;
  addForm: FormGroup;
  policeStations: any;
  alert: boolean;
  alertMessage: string;
  alertClass: string;
  roles: any = [
    'admin',
    'editor'
  ];

  constructor(
    private usersService: UsersService,
    private policeStationsService: PoliceStationsService
  ) { }

  ngOnInit() {
    this.policeStationsService.policeStations()
    .subscribe(
      (response) => {
        this.policeStations = response.records;
      },
      (error) => {
        console.log('error: ', error);
      }
    );

    this.addForm = new FormGroup({
      username: new FormControl('', [
        Validators.required
      ]),
      password: new FormControl('', [
        Validators.required
      ]),
      confirm_password: new FormControl('', [
        Validators.required,
      ]),
      role: new FormControl('', [
        Validators.required
      ]),
      police_station: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  private prepareSave(data) {
    let input = new FormData();

    input.append('username', data.username);
    input.append('password', data.password);
    input.append('role', data.role);
    input.append('police_station', data.police_station);
    return input;
  }

  private showAlert(type, message) {
    this.alertMessage = message;
    if ( type === 'success' ) {
      this.alertClass = 'alert-success';
    } else if ( type === 'failed' ) {
      this.alertClass = 'alert-danger';
    }
    this.alert = true;

    setTimeout(() => {
      this.alert = false;
    }, 5000);
  }

  public submitForm(data) {

    console.log('Form Data: ', data);

    const formModel = this.prepareSave(data);
    console.log('Sending Data: ', formModel);

    this.usersService.addNew(formModel)
      .subscribe(
        (result) => {
          console.log('Result: ', result);
          if ( result.status === 'success' ) {
            this.addForm.reset();
            this.showAlert(result.status, result.message);
          } else {
            this.showAlert(result.status, result.message);
          }
        },
        (error) => {
          console.log('Error: ', error);
        }
      );
  }

}
