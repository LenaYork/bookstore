import "./Header.css";

export const Header = () => {

    return(
        <div className="header">
            <h1 className="app-title">Book Store</h1>
            
            <div className="header-icons">
                <p
                    className="headerLink"
                >
                    Log In
                </p>
                <a href="./cart" className="headerLink">Cart</a>
            </div>
        </div>
    )
}