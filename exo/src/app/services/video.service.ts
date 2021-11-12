import { Injectable, OnInit } from '@angular/core';
import { Video } from '../models/Video.model';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class VideoService implements OnInit{

 

  apiURL = 'https://api.kinomap.com/v3/videos/coaching/search/elastic?appToken=5cphz6MXH1Uzr8zDsJ6uVSYS9aOzMXXDio0dclN6QwFDVlZc7h84qDZNG2ttdAeLvhxlc7jCNGe454PmNiDV8cdruQTHW388mCXgexzC7UoydgkWsLMMmDun&limit=15&page=1'

  data: any;
  card: any;

  // sera ce qui sera affiché sur la page
  displayedData: Video[] = [];


  itemsPerPage: number = 4;
  allPages!: number;
  currentPage: number = 1;

getAll() {
    this.HttpClient.get<Video>(
      this.apiURL,
       {observe: 'response'}
   )
     .subscribe(response => {
       this.data = response;
       this.getData();
       this.onPageChange();
       this.allPages = Math.ceil(this.data.length / this.itemsPerPage);
     },
     (error) => {
       console.log('error : ' + error);
       
     });
  }

  onPageChange(currentPage: number = 1): void {
    //méthode déclanché à chaque fois qu'elle reçoit l'événeemnt du composant de pagination
    const startItem = (currentPage - 1) * this.itemsPerPage;
    console.log(startItem);
    
    const endItem = currentPage * this.itemsPerPage;
    console.log(endItem);


    // portion du tableau d'origine
    this.displayedData = this.card.slice(startItem, endItem);
    console.log(this.displayedData);
    
  }

  getData() {
    this.card = this.data.body.data;
  }

  constructor(private HttpClient: HttpClient) {
    this.getAll();
   }

  ngOnInit(): void {
    this.getAll();  }  
}
