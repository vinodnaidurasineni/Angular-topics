import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-templateforms',
  templateUrl: './templateforms.component.html',
  styleUrls: ['./templateforms.component.css']
})
export class TemplateformsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  formData:any;
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
     console.log(params.get('number'));
    });
    this.route.queryParams.subscribe(params => {
      console.log(params);
     });
  }

  goToItems() {
    this.router.navigate(['items'], { relativeTo: this.route });
  }
  register(form:any){
    console.log(form.value)
    this.formData=form.value
  }
}
