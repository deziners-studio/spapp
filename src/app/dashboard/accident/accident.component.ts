import { Component, OnInit } from '@angular/core';
import { FirsService } from '../../services/firs/firs.service';

@Component({
  selector: 'app-accident',
  templateUrl: './accident.component.html',
  styleUrls: ['./accident.component.css']
})
export class AccidentComponent implements OnInit {

  public firsAccidentData: any[];
  public accidentData: any[] = [];

  constructor(private firsService: FirsService) { }

  ngOnInit() {
    this.firsService.getFirs()
      .subscribe(
        (result) => {
          // console.log('Result: ', result);
          this.firsAccidentData = result.records;

          for ( let i in this.firsAccidentData ) {
            if ( this.firsAccidentData[i].fa_type ===  'Accident Information' ) {
              this.accidentData.push(this.firsAccidentData[i]);
            }
          }
          console.log('FIRs Data: ', this.accidentData);
        },
        (error) => {
          console.log('Error', error);
        }
      );
  }

}
