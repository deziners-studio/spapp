import { Component, OnInit } from '@angular/core';
import { MissingPersonsService } from '../services/missing-persons/missing-persons.service';
import { PoliceStationsService } from '../services/police-stations/police-stations.service';

@Component({
  selector: 'app-missing-persons',
  templateUrl: './missing-persons.component.html',
  styleUrls: ['./missing-persons.component.css']
})
export class MissingPersonsComponent implements OnInit {

  missingPersonsData: any;
  policeStations: any = [];
  formModel: any = {
    name: '',
    missingRegNo: null,
    policeStation: null
  }

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
  }

  onSearchClick() {
    console.log(' formModel---> ', this.formModel);
    this.missingPersonsService.getByParams(this.prepareSearch(this.formModel))
    .subscribe(
      (result) => {
        // console.log('Result: ', result);
        this.missingPersonsData = result.records;
        console.log(' this.missingPersonsData -->', this.missingPersonsData);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

  prepareSearch(data) {
    let input = new FormData();
        input.append('name', data.name);
        input.append('missing_registration_no', data.missingRegNo);
        input.append('police_station', data.policeStation);
        return input;
  }

}
