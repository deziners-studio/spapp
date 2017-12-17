import { Component, OnInit } from '@angular/core';
import { FirsService } from '../../services/firs/firs.service';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  public firsAccidentData: any[];
  public firsData: any[] = [];
  public accidentData: any[] = [];

  constructor(private firsService: FirsService) { }

  ngOnInit() {
    this.firsService.getFirs()
    .subscribe(
      (result) => {
        // console.log('Result: ', result);
        this.firsAccidentData = result.records;

        for ( let i in this.firsAccidentData ) {
          if ( this.firsAccidentData[i].fa_type ===  "FIR" ) {
            this.firsData.push(this.firsAccidentData[i]);
          } else {
            this.accidentData.push(this.firsAccidentData[i]);
          }
        }
        console.log('FIRs Data: ', this.firsData);
        console.log('Accident Data: ', this.accidentData);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

}
