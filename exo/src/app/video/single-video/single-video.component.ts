import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-single-video',
  templateUrl: './single-video.component.html',
  styleUrls: ['./single-video.component.scss']
})
export class SingleVideoComponent {

  @Input() data: Array<any> = [];
  @Input() image: string = '';
  @Input() title: string = '';
  @Input() views: number = 0;
  @Input() uploaderName: string = '';
  @Input() duration: number = 0;
  @Input() language: string = ''; 

  constructor() { }
}
