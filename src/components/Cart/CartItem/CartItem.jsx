import "./CartItem.css";

export const CartItem = ({title, writer, image, price, id, buttonHandler}) => {

    return(
            <div className="cart-item">
                <img src={image} alt={title} className="cart-book-image"></img>
                <div className="cart-book-info">
                    <h3 className="cart-title">{title}</h3>
                    <p className="cart-writer">{writer}</p>
                </div>
                <p className="cart-price">$ {price}</p>
                <p className="delete-item" onClick={() => buttonHandler(id, false)}>X</p>
            </div>
        )
}