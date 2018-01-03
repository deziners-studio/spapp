import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliceStationsService } from '../services/police-stations/police-stations.service';
import { StolenVehiclesService } from '../services/stolen-vehicles/stolen-vehicles.service';

@Component({
  selector: 'app-stolen-vehicles',
  templateUrl: './stolen-vehicles.component.html',
  styleUrls: ['./stolen-vehicles.component.css']
})
export class StolenVehiclesComponent implements OnInit {

  stolenVehiclesData: any;
  stolenVehiclesCount = 0;
  policeStations: any = [];
  searchForm: FormGroup;
  vehilceTypes = [
    'Two Wheeler',
    'Three Wheeler',
    'Four Wheeler',
    'Heavy Vehicle'
  ];
  vehilceMakes = [
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
  showDataView = false;
  dataCount = 0;

  constructor(
    private stolenVehiclesService: StolenVehiclesService,
    private policeStationsService: PoliceStationsService
  ) { }

  ngOnInit() {
    this.policeStationsService.policeStations()
    .subscribe(
      (result) => {
        // console.log('Result: ', result);
        this.policeStations = result.records;
      },
      (error) => {
        console.log('Error', error);
      }
    );

    this.searchForm = new FormGroup({
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
        Validators.required,
      ]),
      vehicle_model: new FormControl('', [
        Validators.required,
      ]),
      vehicle_registration_no: new FormControl('', [
        Validators.required,
      ]),
      vehicle_engine_no: new FormControl('', [
        Validators.required,
      ]),
      vehicle_chassis_no: new FormControl('', [
        Validators.required,
      ]),
      police_station: new FormControl('', [
        Validators.required,
      ])
    });
  }

  private prepareSave(data) {
    let input = new FormData();

    input.append('fir_no', data.fir_no);
    // input.append('fir_date', data.fir_date);
    input.append('fir_date', data.fir_date.year + '-' + data.fir_date.month + '-' + data.fir_date.day);
    input.append('vehicle_type', data.vehicle_type);
    input.append('vehicle_make', data.vehicle_make);
    input.append('vehicle_model', data.vehicle_model);
    input.append('vehicle_registration_no', data.vehicle_registration_no);
    input.append('vehicle_engine_no', data.vehicle_engine_no);
    input.append('vehicle_chassis_no', data.vehicle_chassis_no);
    input.append('police_station', data.police_station);
    return input;
  }

  onSearchClick(data) {
    console.log('Form Data: ', data);

    const formModel = this.prepareSave(data);
    console.log('Sending Data: ', formModel);

    this.stolenVehiclesService.getByParams(formModel)
      .subscribe(
        (result) => {
          console.log('Result: ', result);
          if ( result.records ) {
            this.stolenVehiclesData = result.records;
            this.dataCount =  this.stolenVehiclesData.length;
            this.showDataView = true;
          } else {
            this.stolenVehiclesData = [];
            this.dataCount = 0;
            this.showDataView = true;
          }
          if ( result.status === 'success' ) {
            this.searchForm.reset();
          }
        },
        (error) => {
          this.stolenVehiclesCount = 0;
          console.log('Error: ', error);
        }
      );
  }

}

