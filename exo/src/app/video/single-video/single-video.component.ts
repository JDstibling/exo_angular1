import { Component, Input, OnInit } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.scss']
})
export class SingleVideoComponent implements OnInit {


  @Input() data: Array<any> = [];
  //img: any[] = [];

  @Input() image: string = '';
  @Input() title: string = '';
  @Input() views: number= 0;
  @Input() uploaderName: string = '';
  @Input() duration: number = 0;
  @Input() language: string = ''; 


  constructor(private videoService: VideoService) { }


  ngOnInit(): void {

  }


}
