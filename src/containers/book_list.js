import React, { Component } from 'react';
//react-redux allows react and redux to communciate through the connect func.
import { connect } from 'react-redux';
import { selectBook} from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li
          className='list-group-item'
          key={book.title}
          onClick={() => this.props.selectBook(book)}>
          {book.title}
        </li>
      );
    });
  }

  render() {
    return (
      <ul className='list-group col-sm-4'>
        {this.renderList()}
      </ul>
    );
  }
}

/*  this function takes in application state
*   whatever this function returns will show up as props inside of BookList
*   function is key to react and redux communication
*   an object must be returned
*/
function mapStateToProps(state) {
  return {
    books: state.books //books reducer returns an array of books
  };
}

//anything returned from this function will end up as props on BookList
function mapDispatchToProps(dispatch) {
  /* whenever selectBook is called, the result should be passed to all reducers
  * by bindActionCreators function. dispatch passes it to the reducers
  */
  return bindActionCreators({ selectBook: selectBook }, dispatch);
}

// promote BookList from a component to a container. It needs to know
export default connect(mapStateToProps, mapDispatchToProps)(BookList);
