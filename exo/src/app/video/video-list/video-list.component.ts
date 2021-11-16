import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Video } from 'src/app/models/Video.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnDestroy{

  currentPage = 1;
  lastPage = 1;
  data : any;

  pageSubscription: Subscription = new Subscription;
  
  constructor(private videoService: VideoService) {
    this.onFetch(this.currentPage);
  }

  onFetch(page :number) {
    this.pageSubscription = this.videoService.getAll(this.currentPage).subscribe(res => {
        this.data = res.data;
        this.currentPage = res.meta.current_page;    
        this.lastPage = res.meta.last_page;  
    });
   }

   ngOnDestroy(): void {
    this.pageSubscription.unsubscribe();
  }

  changePage(nb :number) {
      this.currentPage = nb;
    this.onFetch(this.currentPage);
  }
}
