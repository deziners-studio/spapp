import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PoliceStationsService } from '../../services/police-stations/police-stations.service';

@Component({
  selector: 'app-edit-fir',
  templateUrl: './edit-fir.component.html',
  styleUrls: ['./edit-fir.component.css']
})
export class EditFirComponent implements OnInit {

  @Input() modalTitle;
  @Input() data;
  policeStations: any;
  firForm: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private policeStationsService: PoliceStationsService
  ) { }

  ngOnInit() {
    this.firForm = new FormGroup({
      crno: new FormControl(this.data.fa_crno, [
        Validators.required
      ]),
      date: new FormControl(this.data.fa_date, [
        Validators.required
      ]),
      policeStationId: new FormControl(this.data.fa_police_station_id, [
        Validators.required
      ]),
      file: new FormControl('')
    });

    console.log('in edit fir component');
    console.log('Data: ', this.data);
    this.policeStationsService.policeStations()
      .subscribe(
        (result) => {
          console.log('Police Stations: ', result.records);
          this.policeStations = result.records;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  public onFirUpdate(formData) {
    console.log('formData: ', formData);
  }

}
