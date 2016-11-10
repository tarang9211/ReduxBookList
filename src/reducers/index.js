import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';

const rootReducer = combineReducers({
  //application state now has state.books as a property.
  //key is books, value is return value of BooksReducer
  books: BooksReducer
});

export default rootReducer;
