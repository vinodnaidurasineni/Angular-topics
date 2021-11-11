import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SericecallService {

  constructor(private http:HttpClient) { }

  makeGetCall(){
    this.http.get("http://test")
  }
}
