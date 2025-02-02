import { Component, EventEmitter, Output } from '@angular/core';
import { BookService } from 'src/app/book.service';
// import { BookService } from '../../book.service';

@Component({
  selector: 'app-add-book-form',
  templateUrl: './add-book-form.component.html',
  styleUrls: ['./add-book-form.component.scss']
  
})
export class AddBookFormComponent {
  @Output() close = new EventEmitter<void>(); 
  book = {
    title: '',
    author: '',
    category: '',
    review: ''
  };

  constructor(private bookService: BookService) {}


  onSubmit() {
    this.bookService.addBook(this.book); 
    this.close.emit(); 
  }

  
  onCancel() {
    this.close.emit(); 
  }
}