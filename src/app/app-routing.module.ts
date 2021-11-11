import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { TestbindingsComponent } from './testbindings/testbindings.component';

const routes: Routes = [
  {path:"test", component:TestbindingsComponent},
  {path:"template",component:TemplateformsComponent},
  {path:"reactive",component:ReactiveformsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
