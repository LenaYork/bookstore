import './App.css';
import { useState } from "react";
import { Header } from "./components/Header/Header";
import { Catalog } from "./components/Catalog/Catalog";
import { Footer } from "./components/Footer/Footer";

function App() {
    const [ displayedBooks, setDisplayedBooks ] = useState([]);

    return (
        <div className="App">
            <Header />
            <div className='main'>
                <Catalog displayedBooks={displayedBooks}/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
