import { DateService } from './../shared/date.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-selector',
  templateUrl: './selector.component.html',
  styleUrls: ['./selector.component.css'],
  

})

export class SelectorComponent {


  constructor(public dateService: DateService) { }
  go(dir: number){
    this.dateService.changerMounth(dir)
  }
  

}
