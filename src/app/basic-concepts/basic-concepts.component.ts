import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basic-concepts',
  templateUrl: './basic-concepts.component.html',
  styleUrls: ['./basic-concepts.component.css']
})
export class BasicConceptsComponent implements OnInit {

  title = 'sample-app';
  number = 10;
  myname="vinod";
  buttonClicked=false;
  itemImageUrl="../assets/OIP.jpg"
  innerContent="<b>i am inner content</b>"
  styles={
    'font-family': 'Times New Roman',
    'font-weight':  'bold',
    'font-size':   '12px'
  }

  callPhone(data:any){
console.log(data);

  }

  clicked(){
    this.buttonClicked=!this.buttonClicked
  }
  
  constructor() {
    console.log("constructor");
  }
  ngOnInit() {
    console.log("i am ngonit");
  }
  ngOnChanges() {
    console.log("i am ngonchanges");
  }

  ngDoCheck(){
    console.log("i am ngDocheck");
  }

  ngAfterContentInit(){
    console.log(" i am ngafterview init");
  }
  ngAfterContentChecked(){
    console.log("i am ngAfterContentChecked")
  }
  ngAfterViewInit(){
    console.log("i am ngAfterViewInit")
  }

  ngAfterViewChecked(){
    console.log("i am ngAfterViewChecked")
  }
  ngOnDestroy(){
    console.log("i am ngOnDestroy")
  }

}
