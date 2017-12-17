import { Component, OnInit } from '@angular/core';
import { MissingPersonsService } from '../../services/missing-persons/missing-persons.service';

@Component({
  selector: 'app-missing-persons',
  templateUrl: './missing-persons.component.html',
  styleUrls: ['./missing-persons.component.css']
})
export class MissingPersonsComponent implements OnInit {

  missingPersonsData: any;

  constructor(private missingPersonsService: MissingPersonsService) { }

  ngOnInit() {
    this.missingPersonsService.getAll()
    .subscribe(
      (result) => {
        // console.log('Result: ', result);
        this.missingPersonsData = result.records;
        console.log('Missing Persons: ', this.missingPersonsData);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

}
