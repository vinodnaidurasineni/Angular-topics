import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestbindingsComponent } from './testbindings/testbindings.component';
import { TemplateformsComponent } from './templateforms/templateforms.component';
import { ReactiveformsComponent } from './reactiveforms/reactiveforms.component';
import { BasicConceptsComponent } from './basic-concepts/basic-concepts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiceCompComponent } from './service-comp/service-comp.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {AuthInterceptor } from './Http-interceptor/auth-interceptor';

@NgModule({
  declarations: [
    AppComponent,
    TestbindingsComponent,
    TemplateformsComponent,
    ReactiveformsComponent,
    BasicConceptsComponent,
    ServiceCompComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
     { provide: HTTP_INTERCEPTORS, useClass:AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
