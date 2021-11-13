import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { SamplegaurdGuard } from './samplegaurd.guard';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { TestbindingsComponent } from './testbindings/testbindings.component';

const routes: Routes = [
  {path:"test", component:TestbindingsComponent, canActivate:[SamplegaurdGuard]},
  {path:"template/:number",component:TemplateformsComponent},
  {path:"reactive",component:ReactiveformsComponent},
  {path:"service",component:ServiceCompComponent},
  {path: "parent", component: ParentComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
