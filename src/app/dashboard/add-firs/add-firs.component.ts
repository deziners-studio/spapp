import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';
import { FirsService } from '../../services/firs/firs.service';
import { PoliceStationsService } from '../../services/police-stations/police-stations.service';

@Component({
  selector: 'app-add-firs',
  templateUrl: './add-firs.component.html',
  styleUrls: ['./add-firs.component.css']
})
export class AddFirsComponent implements OnInit {

  @ViewChild('fileInput') fileInput;
  addForm: FormGroup;
  policeStations: any;
  alert: boolean;
  alertMessage: string;
  alertClass: string;

  constructor(
    private firsService: FirsService,
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
      crno: new FormControl('', [
        Validators.required
      ]),
      police_station: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
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

    input.append('type', data.type);
    input.append('crno', data.crno);
    input.append('police_station', data.police_station);
    input.append('date', data.date);
    input.append('filename', data.filename);
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
    data.type = 'FIR';
    data.filename = data.attachment.name;

    const formModel = this.prepareSave(data);
    console.log('Sending Data: ', formModel);

    this.firsService.addNew(formModel)
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
