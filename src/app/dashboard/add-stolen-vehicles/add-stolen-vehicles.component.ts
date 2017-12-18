import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliceStationsService } from '../../services/police-stations/police-stations.service';
import { StolenVehiclesService } from '../../services/stolen-vehicles/stolen-vehicles.service';

@Component({
  selector: 'app-add-stolen-vehicles',
  templateUrl: './add-stolen-vehicles.component.html',
  styleUrls: ['./add-stolen-vehicles.component.css']
})
export class AddStolenVehiclesComponent implements OnInit {

  @ViewChild('fileInput') fileInput;
  addForm: FormGroup;
  policeStations: any;
  alert: boolean;
  alertMessage: string;
  alertClass: string;
  vehicleType: any = [
    'Two Wheeler',
    'Three Wheeler',
    'Four Wheeler',
    'Heavy Vehicle'
  ];
  vehicleMake: any = [
    'Tata Motors',
    'Maruti Suzuki',
    'Fiat India',
    'Mercedes',
    'Audi',
    'BMW',
    'Chevrolet',
    'Honda',
    'Hero',
    'Bajaj',
    'TVS',
    'Hyundai',
    'Option 13',
    'Other'
  ];

  constructor(
    private stolenVehiclesService: StolenVehiclesService,
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
      fir_no: new FormControl('', [
        Validators.required
      ]),
      fir_date: new FormControl('', [
        Validators.required
      ]),
      vehicle_type: new FormControl('', [
        Validators.required,
      ]),
      vehicle_make: new FormControl('', [
        Validators.required
      ]),
      other_vehicle_make: new FormControl(''),
      vehicle_model: new FormControl('', [
        Validators.required,
      ]),
      vehicle_registration_no: new FormControl('', [
        Validators.required
      ]),
      vehicle_engine_no: new FormControl('', [
        Validators.required,
      ]),
      vehicle_chassis_no: new FormControl('', [
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

    input.append('fir_no', data.fir_no);
    input.append('fir_date', data.fir_date);
    input.append('vehicle_type', data.vehicle_type);

    if ( data.vehicle_make === 'Other' ) {
      input.append('vehicle_make', data.other_vehicle_make);
    } else {
      input.append('vehicle_make', data.vehicle_make);
    }

    input.append('vehicle_model', data.vehicle_model);
    input.append('vehicle_registration_no', data.vehicle_registration_no);
    input.append('vehicle_engine_no', data.vehicle_engine_no);
    input.append('vehicle_chassis_no', data.vehicle_chassis_no);
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

    this.stolenVehiclesService.addNew(formModel)
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
