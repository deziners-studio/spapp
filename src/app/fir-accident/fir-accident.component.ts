import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliceStationsService } from '../services/police-stations/police-stations.service';
import { FirsService } from '../services/firs/firs.service';

@Component({
    selector: 'fir-accident',
    templateUrl: './fir-accident.component.html',
    styleUrls: ['./fir-accident.component.css']
})
export class FirAccidentComponent implements OnInit {

    // private pdfSrc = '../assets/cr.no.46-6.11.2017-CCTNSPalghar.pdf';
    private pdfSrc = '';
    public isShowPdfEnabled = false;
    firAccidentData: any;
    searchForm: FormGroup;
    policeStations: any = [];
    totalPages: number;
    switchPdf = true;
    pdfViewerOptions: any;
    showDataView = false;
    dataCount = 0;

    constructor(
        private firsService: FirsService,
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

        this.searchForm = new FormGroup({
            crno: new FormControl('', [
              Validators.required
            ]),
            type: new FormControl('', [
              Validators.required
            ]),
            police_station: new FormControl('', [
              Validators.required,
            ]),
            date: new FormControl('', [
                Validators.required,
            ]),
          });
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

    private prepareSave(data) {
        let input = new FormData();

        input.append('crno', data.crno);
        input.append('type', data.type);
        // input.append('date', data.date);
        input.append('date', data.date.year + '-' + data.date.month + '-' + data.date.day);
        input.append('police_station', data.police_station);
        return input;
    }

    changePDF() {
        this.pdfSrc = 'http://spapp.sentr.co.in/uploads/fir-accident/' + this.firAccidentData[0].fa_filename;
    }

    public onSearchClick(data) {
        this.pdfSrc = '';
        console.log(' this.isShowPdfEnabled --> ', this.isShowPdfEnabled);
        console.log('Form Data: ', data);
        const formModel = this.prepareSave(data);
        console.log('Sending Data: ', formModel);

        this.firsService.getByParams(formModel)
        .subscribe(
            (result) => {
            console.log('Result: ', result);
            if ( result.records ) {
                this.firAccidentData = result.records;
                this.dataCount =  this.firAccidentData.length;
                this.showDataView = true;
                console.log('FIRs: ', this.firAccidentData);
                this.isShowPdfEnabled = true;
                this.changePDF();
            } else {
                this.firAccidentData = [];
                this.dataCount = 0;
                this.showDataView = true;
            }
            if ( result.status === 'success' ) {
                this.searchForm.reset();
            }
            },
            (error) => {
            console.log('Error: ', error);
            }
        );
    }

}
