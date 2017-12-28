import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliceStationsService } from '../services/police-stations/police-stations.service';
import { DeadBodiesService } from '../services/dead-bodies/dead-bodies.service';

@Component({
  selector: 'app-dead-bodies',
  templateUrl: './dead-bodies.component.html',
  styleUrls: ['./dead-bodies.component.css']
})
export class DeadBodiesComponent implements OnInit {

  deadBodiesData: any;
  deadBodiesCount = 0;
  policeStations: any = [];
  searchForm: FormGroup;
  gender = [
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
      (result) => {
        // console.log('Result: ', result);
        this.policeStations = result.records;
      },
      (error) => {
        console.log('Error', error);
      }
    );

    this.searchForm = new FormGroup({
      ad_no: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required
      ]),
      gender: new FormControl('', [
        Validators.required,
      ]),
      age: new FormControl('', [
        Validators.required,
      ]),
      police_station: new FormControl('', [
        Validators.required,
      ])
    });
  }

  private prepareSave(data) {
    let input = new FormData();

    input.append('ad_no', data.ad_no);
    input.append('date', data.date);
    input.append('gender', data.gender);
    input.append('age', data.age);
    input.append('police_station', data.police_station);
    return input;
  }

  onSearchClick(data) {
    console.log('Form Data: ', data);

    const formModel = this.prepareSave(data);
    console.log('Sending Data: ', formModel);

    this.deadBodiesService.getByParams(formModel)
      .subscribe(
        (result) => {
          console.log('Result: ', result);
          if ( result.records ) {
            this.deadBodiesData = result.records;
            this.deadBodiesCount = this.deadBodiesData.length;
          } else {
            this.deadBodiesData = [];
            this.deadBodiesCount = 0;
          }
          if ( result.status === 'success' ) {
            this.searchForm.reset();
          }
        },
        (error) => {
          this.deadBodiesCount = 0;
          console.log('Error: ', error);
        }
      );
  }

}
