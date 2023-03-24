import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  myVariable: string ='the first with me ';
  updateMyValue(){
    this.myVariable = 'Now is the fist even strong';
  }

  myVariable2: string ='the first with me ';
  updateMyValue2(){
    this.myVariable = 'From cct';
  }

}
