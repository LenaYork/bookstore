import "./Catalog.css";

export const Catalog = ({books, buttonHandler, displayedBooks, setDisplayedBooks}) => {
    return(
        <div className="catalog">
        
            <div className="cards-container">
                {displayedBooks.map(
                    (book) => {
                        return(
                            <div></div>
                        )
                    }
                )}
            </div>
        </div>
    )
}