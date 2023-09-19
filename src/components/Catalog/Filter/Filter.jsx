import "./Filter.css";
import { uniq, uniqBy } from 'lodash';

export const Filter = ({books, setDisplayedBooks}) => {

    const soloGenre = books.map(book => book.genre ).flat();

    const formHandler = () => {
        const form = document.querySelector("#form");
        const writer = form.writer.value;
        const year = form.year.value;
        const isChecked = form.sortPriceInput.checked;
        
        const selectedOptions = Array.from(form.genres.options)
            .filter(option => option.selected)
            .map(option => option.value);

        let newBooks = [...books];
        const newArrayForDisplay = newBooks.filter (book => 
            (book.genre.some( genre => selectedOptions.includes(genre)) || selectedOptions.length === 0 )
            && (book.year === year || year === "all-years")
            && (book.writer === writer || writer === "all-writers")
        );

        setDisplayedBooks(isChecked ? newArrayForDisplay.sort( (a,b) => a.price - b.price ) : newArrayForDisplay);
    }

    return(
        <form 
            className="filter-container" 
            onChange={formHandler} 
            // onClick={formHandler} 
            id="form"
        >
            <div className="filter-mobile-container">
            <h3>Sort books:</h3>
            <div className="sorting-selections">
                <p className="filter-text">chose writer</p>
                <select className="filter-select" defaultValue="all-writers" name="writer">
                    <option value="all-writers" >All writers</option>
                    {uniqBy(books, "writer").map( book => <option 
                            key={book.id} 
                            value={book.writer} 
                        >
                            {book.writer}
                        </option> )}
                </select>
            </div>
            

            <div className="sorting-selections">
                <p className="filter-text">choose year</p>
                <select className="filter-select" defaultValue="all-years" name="year">
                    <option value="all-years">All years</option>
                    {([...books].sort( (a, b) => a.year - b.year).map( book => <option 
                            value={book.year} 
                            key={book.id} 
                        >
                            {book.year}
                        </option> ))}
                </select>
            </div>
            

            <div className="sorting-selections">
                <p className="filter-text">choose genres</p>
                <select  
                    className="filter-select" 
                    multiple="multiple" 
                    size="8" 
                    defaultValue={[]}
                    name="genres"
                >
                    {uniq(soloGenre).map( (genre, index) => <option 
                            key={index}
                            value={genre}
                        >
                            {genre}
                        </option>)}
                </select>
            </div>
            
            <div className="price-sort-controls">
                <input type="checkbox" id="sortPriceInput" name="sortPriceInput" />
                <label htmlFor="sortPriceInput" className="filter-text"> sort by price</label>
            </div>

            </div>
        
        </form>)
}