import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  constructor() { }

  formData:any;
  ngOnInit(): void {
  }

  register(form:any){
    console.log(form.value)
    this.formData=form.value
  }
}
