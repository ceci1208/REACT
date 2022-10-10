import React, { useContext } from 'react';
import StateContext from '../Contexts/StateContext';
import { Link } from 'react-router-dom'

function Header() {
    // console.log(cart.reduce((a, b) => parseInt(a) + parseInt(b.count), 0));

    const { state } = useContext(StateContext);
    const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">Chonita's Instruments</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
                    
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex">
                            <button className="btn btn-outline-light" type="submit" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                <i className="bi-cart-fill me-1"></i>
                                Cart
                                <span className="badge bg-dark text-white ms-1 rounded-pill">{ total }</span>
                            </button>
                        </form>
                    </div>
                    <div>
                    <a>
                    <Link to="/login">
                        <button type="button" className="btn btn-outline-light bi bi-box-arrow-up bc-white">      Log OUT</button>
                    </Link>
                    </a>
                    </div>
                </div>
            </nav>
            
        </>
    )
}

export default Header