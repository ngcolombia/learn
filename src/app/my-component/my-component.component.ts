import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  count = 0;

  constructor() { }

  ngOnInit() {
  }

  add(){
    this.count +=1;
  }

}
