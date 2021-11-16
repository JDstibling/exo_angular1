import {
  Component,
  Input,
  Output,
  EventEmitter,
} from "@angular/core";

@Component({
  selector: "app-pagination",
  templateUrl: "./pagination.component.html",
  styleUrls: ["./pagination.component.scss"],
})
export class PaginationComponent {
  @Output() pageChange = new EventEmitter();

  @Input() currentPage: number = 0;
  @Input() lastPage: number = 0;

  constructor() {}

  changePage(type :String) {
    let page = this.currentPage;

    switch (type) {
      case 'First':
        page = 1;
        break;
      case 'Prev':
          page <= 1 ? page = 1 : page--;
        break;
      case 'Next':
        page >= this.lastPage ? page = this.lastPage : page++;
        break;
      case 'Last':
          page = this.lastPage;
        break;
      default:
        break;
    }  
    
    this.pageChange.emit(page);
  }
}