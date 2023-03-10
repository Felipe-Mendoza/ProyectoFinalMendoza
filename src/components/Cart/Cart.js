
import React from 'react'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { FaTrashAlt } from "react-icons/fa"
import { Link } from "react-router-dom"

const Cart = () => {
    const { cart, emptycart, totalCart, removerItem } = useContext(CartContext)
   

    if (cart.length === 0) {
        return (
            <div className="container carritoVacio">
                <div className="row my-4">
                    <div className="col-md-12 text-center">
                        <div className="alert alert-danger" role="alert">No se encontraron productos en el carrito</div>
                        <Link to={"/"} className="btn btn-primary">Volver al Inicio</Link>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div className="container cartContainer">
            <div className="row mt-5 justify-content-center">
                <div className="col-md-10">
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end">
                                    <button className="btn btn-danger" onClick={emptycart}>Vaciar carrito</button>
                                    {/* <Link onClick className="btn btn-warning">Vaciar Carrito</Link> */}
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Titulo libro</th>
                                <th scope="col" className="text-center">Cantidad</th>
                                <th scope="col" className="text-center">Precio</th>
                                <th>&nbsp;</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (

                                <tr key={item.id}>
                                    <td className="align-middle text-center"><img src={item.imagen} alt={item.Autor} width="20%" /></td>
                                    <td className="align-middle">{item.Titulo}</td>
                                    <td className="align-middle text-center">{item.cantidad}</td>
                                    <td className="align-middle text-center">$ {item.cantidad * item.precio}</td>
                                    <td className="align-middle text-end"><button onClick={() => removerItem(item.id)} className="btn btn-outline-danger"><FaTrashAlt /></button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td></td>
                                <td></td>
                                <td className="text-end"><b>Total a Pagar</b></td>
                                <td className="text-center"><b>$ {totalCart()}</b></td>
                                <td></td>
                            </tr>
                         
                            <tr>
                                <td></td>
                                <td className="text-center py-3" colSpan="2"><Link to="/checkout" className="btn btn-primary">Finalizar Compra</Link></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Cart