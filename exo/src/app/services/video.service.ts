import { Injectable, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Video } from '../models/Video.model';
import { HttpClient } from '@angular/common/http';



// import 'rxjs/Rx'; // adds ALL RxJS statics & operators to Observable

// See node_module/rxjs/Rxjs.js
// Import just the rxjs statics and operators we need for THIS app.

// Statics
import 'rxjs/add/observable/throw';

// Operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/toPromise';



// apiURL: String = 'https://api.kinomap.com/v3/videos/coaching/search/elastic?appToken=5cphz6MXH1Uzr8zDsJ6uVSYS9aOzMXXDio0dclN6QwFDVlZc7h84qDZNG2ttdAeLvhxlc7jCNGe454PmNiDV8cdruQTHW388mCXgexzC7UoydgkWsLMMmDun&limit=15&page=1'


@Injectable({
  providedIn: 'root'
})
export class VideoService implements OnInit{

 

  apiURL = 'https://api.kinomap.com/v3/videos/coaching/search/elastic?appToken=5cphz6MXH1Uzr8zDsJ6uVSYS9aOzMXXDio0dclN6QwFDVlZc7h84qDZNG2ttdAeLvhxlc7jCNGe454PmNiDV8cdruQTHW388mCXgexzC7UoydgkWsLMMmDun&limit=15&page=1'


  data: any;
  card: any;

getAll() {
    this.HttpClient.get<Video>(
      this.apiURL,
       {observe: 'response'}
   )
     .subscribe(response => {
       this.data = response;
       this.getCard();
     },
     (error) => {
       console.log('error : ' + error);
       
     });
  }

getCard() {
  this.card = this.data.body.data;
}

  constructor(private HttpClient: HttpClient) { }

  ngOnInit(): void {
    this.getAll();  }  
}
