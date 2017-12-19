import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliceStationsService } from '../../services/police-stations/police-stations.service';
import { MissingPersonsService } from '../../services/missing-persons/missing-persons.service';

@Component({
  selector: 'app-add-missing-persons',
  templateUrl: './add-missing-persons.component.html',
  styleUrls: ['./add-missing-persons.component.css']
})
export class AddMissingPersonsComponent implements OnInit {

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
  bodyBuildType: any = [
    'Lean and angular body shape, long limbs, slender, slim, narrow waist',
    'Strong athletic body type, muscular build, well-developed shoulders and slim hips',
    'Round body shape, short and tapering limbs, larger boned than other body types, plump/stocky appearance'
  ];

  constructor(
    private missingPersonsService: MissingPersonsService,
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
      name: new FormControl('', [
        Validators.required
      ]),
      missing_registration_no: new FormControl('', [
        Validators.required
      ]),
      missing_from: new FormControl('', [
        Validators.required,
      ]),
      gender: new FormControl('', [
        Validators.required
      ]),
      dob: new FormControl('', [
        Validators.required
      ]),
      age: new FormControl('', [
        Validators.required,
      ]),
      height: new FormControl('', [
        Validators.required
      ]),
      skin_colour: new FormControl('', [
        Validators.required,
      ]),
      body_build_type: new FormControl('', [
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

    input.append('name', data.name);
    input.append('missing_registration_no', data.missing_registration_no);
    input.append('missing_from', data.missing_from);
    input.append('gender', data.gender);
    input.append('dob', data.dob);
    input.append('age', data.age);
    input.append('height', data.height);
    input.append('skin_colour', data.skin_colour);
    input.append('body_build_type', data.body_build_type);
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

    this.missingPersonsService.addNew(formModel)
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
