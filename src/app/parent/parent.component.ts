import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  name: string ="";
  name1: string = "";
  constructor() { }

  ngOnInit(): void {
    this.name="manasa";
  }

  dataRecieved(event: any){
    this.name1 = event;
  }

}
