```javascript
import {BooksDao} from "./services/BooksDao";
import {Book} from "./business/dto/Book";

export class Books {

  @Inject({ type:BooksDao })
  private _service:BooksDao;

  public getBooks():Array<Book> {
    return this._service.getBooks();
  }
}
```