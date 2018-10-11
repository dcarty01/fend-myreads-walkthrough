import React, {Component} from 'react'
// import * as BooksAPI from './BooksAPI'
import Book from "./Book";

class BookShelf extends Component {
    state = {}

    render() {
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Book/>
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;
