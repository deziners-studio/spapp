import { Component, OnInit } from '@angular/core';
import { MissingPersonsService } from '../services/missing-persons/missing-persons.service';
import { PoliceStationsService } from '../services/police-stations/police-stations.service';

@Component({
    selector: 'fir-accident',
    templateUrl: './fir-accident.component.html',
    styleUrls: ['./fir-accident.component.css']
})
export class FirAccidentComponent implements OnInit {

    private pdfSrc = '../assets/cr.no.46-6.11.2017-CCTNSPalghar.pdf';
    private isShowPdfEnabled = false;
    missingPersonsData: any;
    policeStations: any = [];
    totalPages: number;
    switchPdf = true;
    pdfViewerOptions: any;

    constructor(
        private missingPersonsService: MissingPersonsService,
        private policeStationsService: PoliceStationsService
    ) {
        this.pdfViewerOptions = {
            showAll: true,
            page: 1,
            zoom: '0.7',
            originalSize: false,
            fitToPage: false,
            autoResize: true
        };
    }

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

    nextPage() {
    this.pdfViewerOptions.page++;
    }

    prevPage() {
    this.pdfViewerOptions.page--;
    }

    afterLoadComplete(pdfData: any) {
    this.totalPages = pdfData.numPages;
    }

    private onSearchClick() {
        this.isShowPdfEnabled = true;
        console.log(' this.isShowPdfEnabled --> ', this.isShowPdfEnabled);
    }

}
