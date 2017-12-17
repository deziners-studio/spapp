import { Component, OnInit } from '@angular/core';
import { FirsService } from '../../services/firs/firs.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { EditFirComponent } from '../edit-fir/edit-fir.component';

@Component({
  selector: 'app-fir',
  templateUrl: './fir.component.html',
  styleUrls: ['./fir.component.css']
})
export class FirComponent implements OnInit {

  public firsAccidentData: any[];
  public firsData: any[] = [];

  constructor(
    private firsService: FirsService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.firsService.getFirs()
      .subscribe(
        (result) => {
          // console.log('Result: ', result);
          this.firsAccidentData = result.records;

          for ( let i in this.firsAccidentData ) {
            if ( this.firsAccidentData[i].fa_type ===  'FIR' ) {
              this.firsData.push(this.firsAccidentData[i]);
            }
          }
        },
        (error) => {
          console.log('Error', error);
        }
      );
  }

  public editItem(data) {
    console.log('Edit Data: ', data);
    this.open(data);
  }

  open(data) {
    console.log('opening');
    const modalRef = this.modalService.open(EditFirComponent);
    modalRef.componentInstance.modalTitle = 'Edit FIR';
    modalRef.componentInstance.data = data;
  }

}
