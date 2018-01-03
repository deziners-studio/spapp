import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MissingPersonsService } from '../services/missing-persons/missing-persons.service';
import { PoliceStationsService } from '../services/police-stations/police-stations.service';

@Component({
  selector: 'app-missing-persons',
  templateUrl: './missing-persons.component.html',
  styleUrls: ['./missing-persons.component.css']
})
export class MissingPersonsComponent implements OnInit {

  missingPersonsData: any;
  missingPersonsCount = 0;
  policeStations: any = [];
  searchForm: FormGroup;
  showDataView = false;
  dataCount = 0;

  constructor(
    private missingPersonsService: MissingPersonsService,
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
      name: new FormControl('', [
        Validators.required
      ]),
      missing_registration_no: new FormControl('', [
        Validators.required
      ]),
      missing_from: new FormControl('', [
        Validators.required,
      ]),
      police_station: new FormControl('', [
        Validators.required,
      ])
    });
  }

  private prepareSave(data) {
    let input = new FormData();

    input.append('name', data.name);
    input.append('missing_registration_no', data.missing_registration_no);
    input.append('police_station', data.police_station);
    return input;
  }

  onSearchClick(data) {
    console.log('Form Data: ', data);

    const formModel = this.prepareSave(data);
    console.log('Sending Data: ', formModel);

    this.missingPersonsService.getByParams(formModel)
      .subscribe(
        (result) => {
          console.log('Result: ', result);
          if ( result.records ) {
            this.missingPersonsData = result.records;
            this.dataCount =  this.missingPersonsData.length;
            this.showDataView = true;
          } else {
            this.missingPersonsData = [];
            this.dataCount = 0;
            this.showDataView = true;
          }
          if ( result.status === 'success' ) {
            this.searchForm.reset();
          }
        },
        (error) => {
          this.missingPersonsCount = 0;
          console.log('Error: ', error);
        }
      );
  }

}
