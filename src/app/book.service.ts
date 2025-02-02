import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private books: any[] = [];

  constructor() {}


  addBook(book: any) {
   
    this.books.push({ ...book, reviews: book.review ? [book.review] : [] });
  }

  getBooks() {
    return this.books;
  }

  addReview(bookIndex: number, review: string) {
    if (review) {
      this.books[bookIndex].reviews.push(review); 
    }
  }
}