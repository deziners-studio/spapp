import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliceStationsService } from '../../services/police-stations/police-stations.service';
import { DeadBodiesService } from '../../services/dead-bodies/dead-bodies.service';

@Component({
  selector: 'app-add-dead-bodies',
  templateUrl: './add-dead-bodies.component.html',
  styleUrls: ['./add-dead-bodies.component.css']
})
export class AddDeadBodiesComponent implements OnInit {

  @ViewChild('fileInput') fileInput;
  addForm: FormGroup;
  policeStations: any;
  alert: boolean;
  alertMessage: string;
  alertClass: string;
  gender: any = [
    'Male',
    'Female'
  ];

  constructor(
    private deadBodiesService: DeadBodiesService,
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
      ad_no: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required
      ]),
      time: new FormControl('', [
        Validators.required,
      ]),
      gender: new FormControl('', [
        Validators.required
      ]),
      age: new FormControl('', [
        Validators.required
      ]),
      police_station: new FormControl('', [
        Validators.required,
      ]),
      attachment: new FormControl('')
    });
  }

  onFileChange(event) {
    if ( event.target.files.length > 0 ) {
      let file = event.target.files[0];
      this.addForm.get('attachment').setValue(file);
    }
  }

  private prepareSave(data) {
    let input = new FormData();

    input.append('ad_no', data.ad_no);
    // input.append('date', data.date);
    input.append('date', data.date.year + '-' + data.date.month + '-' + data.date.day);
    input.append('time', data.time);
    input.append('gender', data.gender);
    input.append('age', data.age);
    input.append('police_station', data.police_station);
    input.append('attachment', data.attachment);
    return input;
  }

  clearFile() {
    this.addForm.get('attachment').setValue(null);
    this.fileInput.nativeElement.value = '';
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

    this.deadBodiesService.addNew(formModel)
      .subscribe(
        (result) => {
          console.log('Result: ', result);
          if ( result.status === 'success' ) {
            this.addForm.reset();
            this.clearFile();
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
