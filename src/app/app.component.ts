import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

  <button (click)="AddBook()">Add a book!</button>
})

export class AppComponent{

private bookCounter = 0;

    public AddBook(): void {
        let newBook = new Book(`My book #${this.bookCounter++}`);
        this.books.push(newBook);
    }

}
