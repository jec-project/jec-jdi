```javascript
@Injectable({
  type:BooksDao,
  retention: ["DEV"]
})
export class LocalBooksDao implements BooksDao { }
```