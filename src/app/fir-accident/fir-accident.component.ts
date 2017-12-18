import { Component, OnInit } from '@angular/core';
import { MissingPersonsService } from '../services/missing-persons/missing-persons.service';
import { PoliceStationsService } from '../services/police-stations/police-stations.service';

@Component({
    selector: 'fir-accident',
    templateUrl: './fir-accident.component.html',
    styleUrls: ['./fir-accident.component.css']
})
export class FirAccidentComponent implements OnInit {

    private pdfSrc: string = '../assets/test.PDF';
    private isShowPdfEnabled: boolean = false;
    missingPersonsData: any;
    policeStations: any = [];

    constructor(
        private missingPersonsService: MissingPersonsService,
        private policeStationsService: PoliceStationsService
    ) { }
    
    ngOnInit() {
        this.isShowPdfEnabled = false;
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

    private onSearchClick() {
        this.isShowPdfEnabled = true;
        console.log(' this.isShowPdfEnabled --> ', this.isShowPdfEnabled);
    }

}