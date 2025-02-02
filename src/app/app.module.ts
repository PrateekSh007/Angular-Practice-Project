import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { BookDetailsComponent } from './parent/book-details/book-details.component';
import { AddBookFormComponent } from './parent/add-book-form/add-book-form.component';
// import { AddBookFormComponent } from './add-book-form/add-book-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    BookDetailsComponent ,
    AddBookFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }