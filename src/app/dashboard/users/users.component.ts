import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  usersData: any;

  constructor(
    private usersService: UsersService
  ) { }

  ngOnInit() {
    this.usersService.getAll()
    .subscribe(
      (result) => {
        // console.log('Result: ', result);
        this.usersData = result.records;
        console.log('Users: ', this.usersData);
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

}
