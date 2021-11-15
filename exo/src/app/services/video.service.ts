import { Injectable, OnInit } from '@angular/core';
import { Video } from '../models/Video.model';

import { environment } from '../../environments/environment';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class VideoService{

 
  
  data: any = [];
  card: any;


  itemsPerPage: number = 4;
  allPages!: number;
  currentPage: number = 1;



  getAll(){
    return this.Http.get<Video>(environment.api.training);
  }

  constructor(private Http: HttpClient) {
   }

}
