import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testbindings',
  templateUrl: './testbindings.component.html',
  styleUrls: ['./testbindings.component.css']
})
export class TestbindingsComponent implements OnInit {

  sampleContent="testdata";
  inputData="sample";
  date=null;
  checkbox:any;
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
