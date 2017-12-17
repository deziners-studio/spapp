import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-add-firs',
  templateUrl: './add-firs.component.html',
  styleUrls: ['./add-firs.component.css']
})
export class AddFirsComponent implements OnInit {

  addForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.addForm = new FormGroup({
      type: new FormControl({value: 'FIR', disabled: true}, [
        Validators.required
      ]),
      crno: new FormControl('', [
        Validators.required
      ]),
      police_station: new FormControl('', [
        Validators.required
      ]),
      date: new FormControl('', [
        Validators.required,
      ]),
      attachment: new FormControl(''),
      filename: new FormControl({value: '', disabled: true}, [
        Validators.required
      ])
    });
  }

  public submitForm(data) {
    console.log('Submited Data: ', data);
  }

}
