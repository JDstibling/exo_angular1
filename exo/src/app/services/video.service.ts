import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService{

  perPage: number = 5;

  constructor(private Http: HttpClient) { }

  getAll(currentPage:number){
    return this.Http.get<any>(environment.api.training + '&limit=' + this.perPage + '&page=' + currentPage);
  }

}
