//selectBook is an ActionCreator. It needs to return an action i.e.
//an object with a type property
export function selectBook(book) {
  return {
    type: 'BOOK_SELECTED',
    payload: book
  }
}
