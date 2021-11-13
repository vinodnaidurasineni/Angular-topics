import { Component, OnInit } from '@angular/core';
import { SericecallService } from '../sericecall.service';

@Component({
  selector: 'app-service-comp',
  templateUrl: './service-comp.component.html',
  styleUrls: ['./service-comp.component.css']
})
export class ServiceCompComponent implements OnInit {

  constructor( private service: SericecallService) { }
  data:any;
  error:any;
  ngOnInit(): void {
    this.getConfigData();
    this.getError();
  }

  getConfigData(){
    this.service.getConfig().subscribe(data=>{
       this.data=data;
    },err=>{
      this.error=err.message;
    })
  }

  getError(){
    this.service.makeIntentionalError().subscribe(data=>{
       this.data=data;
    },err=>{
      this.error=err;
    })
  }

}
