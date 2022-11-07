import "./Header.css";
import { Outlet, Link } from "react-router-dom";

export const Header = ({setIsModalActive}) => {
    
    const loginHandler = () => {
        setIsModalActive(true);
    }

    return(
        <div className="header">
            <Link to="./">
                <h1 className="app-title">Book Store</h1>
            </Link>
            <div className="header-icons">
                <p
                    className="headerLink"
                    onClick={loginHandler}
                >
                    Log In
                </p>
                <Link to="./cart" className="headerLink">Cart</Link>
            </div>
            <Outlet />
        </div>
    )
}