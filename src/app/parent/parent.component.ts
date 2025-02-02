import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  books: any[] = [];
  showAddBookForm = false;
  newBook = { title: '', author: '', category: '', review: '' };
  selectedBook: any = null;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
  }

  openAddBookForm() {
    this.showAddBookForm = true;
  }

  onSubmit() {
    if (this.newBook.title && this.newBook.author && this.newBook.category) {
      this.bookService.addBook(this.newBook); 
      this.books = this.bookService.getBooks(); 
      this.showAddBookForm = false;
      this.newBook = { title: '', author: '', category: '', review: '' }; 
    } else {
      alert('Please fill out all fields.');
    }
  }

  onCancel() {
    this.showAddBookForm = false;
    this.newBook = { title: '', author: '', category: '', review: '' }; 
  }

  onSelectBook(book: any) {
    this.selectedBook = book;
  }

 
  addReview(review: string) {
    if (this.selectedBook && review) {
      const bookIndex = this.books.findIndex(b => b === this.selectedBook);
      this.bookService.addReview(bookIndex, review);
      this.selectedBook.reviews.push(review); 
    }
  }
}