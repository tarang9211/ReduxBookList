import React, { Component } from 'react';
//react-redux allows react and redux to communciate through the connect func.
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    return this.props.books.map((book) => {
      return (
        <li className='list-group-item' key={book.title}>{book.title}</li>
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

export default connect(mapStateToProps)(BookList);
