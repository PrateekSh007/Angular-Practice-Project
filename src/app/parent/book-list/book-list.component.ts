import { Component } from '@angular/core';
import { BookService } from '../../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  books: any[] = [];
  categories: string[] = [];

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.books = this.bookService.getBooks();
    // this.categories = this.bookService.getCategories();
  }

  getBooksByCategory(category: string) {
    return this.books.filter(book => book.category === category);
  }
}