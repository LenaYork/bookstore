import './App.css';
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Catalog } from "./components/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";
import { BOOKS } from "./components/BOOKS";

function App() {
    const [ books, setBooks ] = useState(BOOKS);
    const [ cartBooks, setCartBooks ] = useState([]);
    const [ displayedBooks, setDisplayedBooks ] = useState(BOOKS);

    const buttonHandler = (id, isToggling) => {

        const updateBooks = (arr) => {
            let newBooks = [...arr];
            newBooks = newBooks.map(book =>
                {
                    if (book.id === id) {
                        let newBook = {...book};
                        newBook.isChosen = isToggling ? !newBook.isChosen : false;
                        return newBook;
                    } else return book;
                });
                return newBooks;
        }

        const updatedBooks = updateBooks(books);

        setBooks(updatedBooks);
        setDisplayedBooks(updateBooks(displayedBooks));
        
        setCartBooks(updatedBooks.filter(book => book.isChosen));
        // calculateSum(updatedBooks);
    }

    return (
        <div className="App">
            <Header />
            <div className='main'>
                <Catalog books={books} buttonHandler={buttonHandler} displayedBooks={displayedBooks} setDisplayedBooks={setDisplayedBooks}/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
