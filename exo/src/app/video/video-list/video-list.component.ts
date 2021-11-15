import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';
//import { Observable } from 'rxjs';
import { Observable, interval} from 'rxjs';
import { Video } from 'src/app/models/Video.model';

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
  secondes = 0;
 
  dataSubject: any;
  

  constructor(private videoService: VideoService) {
    this.onFetch();
  }

  onFetch() {
    this.videoService.getAll()
    .subscribe(
            (response: Video) => {
            //console.log(response);
            this.data = response;
            // this.data = {
            //   image: response.image,
            //   title: response.title,
            //   language: response.language,
            //   uploaderName: response.uploaderName,
            //   duration: response.duration
            // }

            console.log(this.data);
            
            this.getData();
          },
          (error: string) => {
            console.log('error : ' + error);
            
          });
   }


   getData() {
    this.card = this.data.data;
    //console.log(this.data.data);
    
    
  }

  ngOnInit() {

  }


}
