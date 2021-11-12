import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    console.log(this.currentPage);
    
  }


  // propriété émise vers video-list
  get currentPage(): number {
    return this._currentPage;
  }

  set currentPage(page) {
    this.currentPage = page;
    this.changePage.emit(this.currentPage);
  }

  onFirstPage(): void {
    this.currentPage = 1;
  }

  onLastPage(): void {
    this.currentPage = this.allPagesNumber;
  }

  onNextPage(): void {
    this.currentPage += 1;
  }

  onPreviousPage(): void {
    this.currentPage -= 1;
  }
}