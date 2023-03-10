import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import carrito from "../CartWidget/img/carrito-de-compras.png";
import './CartWidget.css';
export const CartWidget = () => {

    const { totalCantidad, cart } = useContext(CartContext)

    return (
        <Link to="/cart">
            <div className={`carrito ${cart.length > 0 ? "carrito-activo" : ''}`}>
                <span><p className="contador">{totalCantidad()}</p></span>
                <img src={carrito} width="15%" height="30" alt="" />
            </div>
        </Link>
    )
}