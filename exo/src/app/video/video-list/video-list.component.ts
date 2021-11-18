import { Component, OnDestroy} from '@angular/core';
import { VideoService } from '../../services/video.service';
import { Subscription } from 'rxjs';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.scss']
})
export class VideoListComponent implements OnDestroy{

  currentPage = 1;
  lastPage = 1;
  data : any;
  card: any;
  urlVideo!: string;

  pageSubscription: Subscription = new Subscription;
  
  constructor(private videoService: VideoService) {
    this.onFetch(this.currentPage);
  }

  onFetch(page :number) {
    this.pageSubscription = this.videoService.getAll(this.currentPage).subscribe(res => {
      console.log(res);
      
        this.data = res.data;
        this.card = [];
        this.data.forEach((element: any) => {
          this.card.push(element.data);
        });
        
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
  
  showVideo(element:number){
    this.urlVideo = environment.video_URL.video + this.card[element].hash_id;
    document.location.href = this.urlVideo;
  }

}
