import React, { useContext } from 'react';
import StateContext from '../Contexts/StateContext';
import actions from '../Reducers/Actions';
import { Link } from 'react-router-dom'

function Modal() {

    
    const { state, dispatch } = useContext(StateContext);

    function increment(id) {
        dispatch({
            type: actions.UPDATE_INSTRUMENT,
            payload: { id, quantity: 1 },
        });
    }

    function decrement(id) {
       if(cant<=0){
        dispatch({
            type: actions.UPDATE_INSTRUMENT,

            payload: { id, quantity: 0},
        });
       }
       else{
        dispatch({
            type: actions.UPDATE_INSTRUMENT,

            payload: { id, quantity: -1},
        });
       }
            
                   
    }


    
    const cant = state.cart.map((cartItem) => (
        //parseInt(cartItem.meal.price) * parseInt(cartItem.quantity)
        parseInt(cartItem.quantity)
    ), 0);

    const total = state.cart.map((cartItem) => (
        //parseInt(cartItem.meal.price) * parseInt(cartItem.quantity)
        parseInt(cartItem.instrument.price) * parseInt(cartItem.quantity)
    ), 0);

    let newtotal = total.reduce((a, b) => a + b, 0);
    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content bg-dark">
                        <div className="modal-header">
                            <h1 className="modal-title" id="exampleModalLabel" style={{ color: "beige", fontFamily: "fantasy", fontSize: "40px" }}>The Carriteichon</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container text-center">
                                <div className="row align-items-center">
                                    <div className="col" style={{ color: "beige", fontSize: "20px" }}>
                                        Nombre
                                    </div>
                                    <div className="col" style={{ color: "beige", fontSize: "20px" }}>
                                        Precio
                                    </div>
                                    <div className="col" style={{ color: "beige", fontSize: "20px" }}>
                                        Cantidad
                                    </div>
                                    <div className="col" style={{ color: "beige", fontSize: "20px" }}>
                                        SubTotal
                                    </div>
                                    <div className="col" style={{ color: "beige", fontSize: "20px" }}>
                                        Acciones
                                    </div>
                                </div>
                                {/* {cartItem.meal.name} */}
                                {state.cart.map((cartItem) => (
                                    <div className="row align-item-start">
                                        <div className="col">
                                            <a href="/#" style={{ color: "#5ca1b7" }}>{cartItem.instrument.name}</a>
                                        </div>
                                        <div className="col">
                                            <span style={{ color: "#9ecaf0" }}>${cartItem.instrument.price}</span>
                                        </div>
                                        <div className="col">
                                            {/* <div className="menu-ingredients">{meal.count}</div> */}
                                            {/* <input type="number" min="1" value={meal.count} onChange={handleChange} className="form-control" style={{ width: "150px", flex: "none" }} placeholder="Cantidad" aria-label="Cantidad" aria-describedby="button-addon2" />                             */}
                                            <span style={{ color: "#9ecaf0" }}>x{cartItem.quantity}</span>
                                        </div>
                                        <div className="col">
                                            <span style={{ color: "#9ecaf0" }}>$ {parseInt(cartItem.instrument.price) * parseInt(cartItem.quantity)}</span>
                                        </div>
                                        <div className="col">
                                            <div className="menu-ingredients">
                                                <button className="btn btn-sm" onClick={() => decrement(cartItem.instrument.id)} style={{ background: "#373f46" }} type="button" id="button-addon2"><i className="bi bi-cart-dash text-white" ></i></button>
                                                <button className="btn btn-sm" onClick={() => increment(cartItem.instrument.id)} style={{ background: "#01779c" }} type="button" id="button-addon2"><i className="bi bi-cart-plus text-white"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-2 3" >
                                    <h1 style={{ color: "beige", fontFamily: "fantasy", fontSize: "22px" }}>Total: $ {newtotal}</h1>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-outline-secondary" data-bs-dismiss="modal">Close</button>
                            <Link to="/checkout">
                                <button type="button" className="btn btn-outline-success" data-bs-dismiss="modal">Order</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Modal;