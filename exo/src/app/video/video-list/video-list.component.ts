import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  itemsPerPage: number = this.videoService.itemsPerPage;
  allPages: number = this.videoService.allPages;
  data : any;
  card: any[] = [];
  

  constructor(private videoService: VideoService) {}

  onFetch() {
    this.data = this.videoService.displayedData
    for(let i = 0; i < this.data.length; i++){
      this.card.push(this.data[i])
    }
    //console.log(this.card);
   }

  ngOnInit(): void {
    this.videoService.getAll();
    //this.onFetch();
  }

  onPageChange(event: number){
    this.videoService.onPageChange(event);
  }

}
