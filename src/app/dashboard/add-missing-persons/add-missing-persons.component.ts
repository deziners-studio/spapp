import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MissingPersonsService } from '../../services/missing-persons/missing-persons.service';

@Component({
  selector: 'app-add-missing-persons',
  templateUrl: './add-missing-persons.component.html',
  styleUrls: ['./add-missing-persons.component.css']
})
export class AddMissingPersonsComponent implements OnInit {

  @ViewChild('fileInput') fileInput;
  addForm: FormGroup;

  constructor(private missingPersonsService: MissingPersonsService) { }

  ngOnInit() {
  }

  addFile(): void {
    let fi = this.fileInput.nativeElement;
    if ( fi.files && fi.files[0] ) {
      let fileToUpload = fi.files[0];
      this.missingPersonsService.addNew(fileToUpload)
        .subscribe(res => {
          console.log(res);
        });
    }
  }

}
