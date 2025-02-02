import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent {
  @Input() selectedBook: any;
  @Output() addReview = new EventEmitter<string>();

  newReview: string = '';

  onAddReview() {
    if (this.newReview) {
      // this.newReview = '' ; 
      this.addReview.emit(this.newReview); 
      this.newReview = '';
    }
  }
}