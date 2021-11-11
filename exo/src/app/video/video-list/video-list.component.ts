import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnInit {

  data : any;
  card: any[] = [];

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.getAll();
    //this.onFetch();
    
    
  }

  onFetch() {
    this.data = this.videoService.card
    for(let i = 0; i < this.data.length; i++){
      this.card.push(this.data[i])
    }
    //console.log(this.card);
   }

}
