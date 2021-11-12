import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {
  @Input() itemsPerPage: number = 0;
  @Input() itemsNumber: number = 0;
  @Input() allPagesNumber: number = 0;
  // utilisation de EventEmitter pour émettre des événements perso et les sauvegarder et modifier la valeur directement
  @Output() changePage: EventEmitter<number> = new EventEmitter<number>();
  private _currentPage: number = 1;

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {}

  // propriété émise vers video-list
  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(page) {
    this._currentPage = page;
    this.changePage.emit(this.currentPage);
    
  }

  onFirstPage(): void {
    this._currentPage = 1;
    this.videoService.onPageChange(this._currentPage);
    //console.log(this.currentPage);
  }

  onLastPage(): void {
    this._currentPage = this.allPagesNumber;
    this.videoService.onPageChange(this._currentPage);
    //console.log(this.currentPage);
  }

  onNextPage(): void {
    this._currentPage += 1;
    //console.log(this.currentPage);
    this.videoService.onPageChange(this._currentPage);
  }

  onPreviousPage(): void {
    this._currentPage -= 1;
    this.videoService.onPageChange(this._currentPage);
    //console.log(this.currentPage);
  }

  onPageChange(currentPage: number): void {
    this.videoService.onPageChange(this._currentPage);
  }
}