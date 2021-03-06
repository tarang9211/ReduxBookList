//state argument is not application state, but only the state this reducer is
//responsible for.

//default value i.e. if state is undefined, set it to null.
export default function(state = null, action) {
  switch(action.type) {

  case 'BOOK_SELECTED':
    return action.payload;

  }
  return state;
}
