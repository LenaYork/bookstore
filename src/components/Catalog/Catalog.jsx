import "./Catalog.css";
import { BookCard } from "./BookCard/BookCard";


export const Catalog = ({books, buttonHandler, displayedBooks, setDisplayedBooks}) => {
    return(
        <div className="catalog">
        
            <div className="cards-container">
                {displayedBooks.map(
                    (book) => {
                        return(
                            <BookCard 
                                key={`${book.title}-${book.writer}`}
                                title={book.title}
                                writer={book.writer}
                                image={book.image}
                                year={book.year}
                                genres={book.genre}
                                id={book.id}
                                price={book.price}
                                buttonHandler={buttonHandler}
                                isChosen={book.isChosen}
                            />
                        )
                    }
                )}
            </div>
        </div>
    )
}