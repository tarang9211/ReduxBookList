import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer_active_book';

const rootReducer = combineReducers({
  //application state now has state.books as a property.
  //key is books, value is return value of BooksReducer
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
