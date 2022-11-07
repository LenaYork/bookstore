import "./Cart.css";
import { CartItem } from "./CartItem/CartItem";

export const Cart = ({ cartBooks, cartSum, buttonHandler }) => {

    const cartWelcome = cartBooks.length 
        ? "Books you are about to order:" 
        : "Your cart is empty";

    return(
        <div className="cart">
            <p className="cart-welcome">{cartWelcome}</p>
            {cartBooks.map( book => {
                return (
                    <CartItem 
                        key={`${book.writer}${book.image}${book.title}`}
                        title={book.title}
                        writer={book.writer}
                        image={book.image}
                        price={book.price}
                        id={book.id}
                        buttonHandler={buttonHandler}
                    />
                )
            })
            }
            <div className="total">Total sum: $ {cartSum}</div>
        </div>
    )
}