import { 
	Component,
	Input, 
	Output, 
	EventEmitter }     from '@angular/core';
import { OnChanges } from '@angular/core';

@Component({
	selector: 'pagination',
    template: `
    <nav *ngIf="totalItems > pageSize" aria-label="Page navigation example">
        <ul class="pagination">
            <li [class.disabled]="currentPage == 1" class="page-item">
            <a (click)="previous()" class="page-link" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
            </a>
            </li>
            <li [class.active]="currentPage == page" *ngFor="let page of pages" (click)="changePage(page)" class="page-item">
                <a class="page-link" href="#">{{ page }}</a>
            </li>
            <li [class.disabled]="currentPage == pages.length" class="page-item">
            <a (click)="next()" class="page-link" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
            </a>
            </li>
        </ul>
    </nav>
`
})
export class PaginationComponent implements OnChanges {
  @Input('total-items') totalItems;
	@Input('page-size') pageSize = 10;
	@Output('page-changed') pageChanged = new EventEmitter();
	pages: any[];
	currentPage = 1; 

	ngOnChanges(){
    this.currentPage = 1;

		var pagesCount = Math.ceil(this.totalItems / this.pageSize); 
		this.pages = [];
		for (var i = 1; i <= pagesCount; i++)
			this.pages.push(i);

	}

	changePage(page){
		this.currentPage = page; 
		this.pageChanged.emit(page);
	}

	previous(){
		if (this.currentPage == 1)
			return;

		this.currentPage--;
		this.pageChanged.emit(this.currentPage);
	}

	next(){
		if (this.currentPage == this.pages.length)
			return; 

		this.currentPage++;
		
		this.pageChanged.emit(this.currentPage);
	}
} 