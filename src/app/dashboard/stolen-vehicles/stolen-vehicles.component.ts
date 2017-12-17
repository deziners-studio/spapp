import { Component, OnInit } from '@angular/core';
import { StolenVehiclesService } from '../../services/stolen-vehicles/stolen-vehicles.service';

@Component({
  selector: 'app-stolen-vehicles',
  templateUrl: './stolen-vehicles.component.html',
  styleUrls: ['./stolen-vehicles.component.css']
})
export class StolenVehiclesComponent implements OnInit {

  stolenVelichesData: any;

  constructor(private stolenVehiclesService: StolenVehiclesService) { }

  ngOnInit() {
    this.stolenVehiclesService.getAll()
    .subscribe(
      (result) => {
        // console.log('Result: ', result);
        this.stolenVelichesData = result.records;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

}
