import { Component, OnInit } from '@angular/core';
import { DeadBodiesService } from '../../services/dead-bodies/dead-bodies.service';

@Component({
  selector: 'app-dead-bodies',
  templateUrl: './dead-bodies.component.html',
  styleUrls: ['./dead-bodies.component.css']
})
export class DeadBodiesComponent implements OnInit {

  deadBodiesData: any;

  constructor(private deadBodiesService: DeadBodiesService) { }

  ngOnInit() {
    this.deadBodiesService.getAll()
    .subscribe(
      (result) => {
        // console.log('Result: ', result);
        this.deadBodiesData = result.records;
      },
      (error) => {
        console.log('Error', error);
      }
    );
  }

}
