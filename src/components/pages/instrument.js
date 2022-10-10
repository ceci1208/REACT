import { useParams } from "react-router-dom";
import useHttp from "../hooks/use-http";
import React, { useEffect, useContext } from 'react'
import StateContext from "../Contexts/StateContext";
import actions from "../Reducers/Actions";
import Navbar from '../Styles/Navbar';
import Footer from "../Styles/Footer"
import MenuContext from '../Contexts/MenuContext';


function Instrument() {

    const { index } = useParams();
    const { request } = useHttp();
    const { dispatch, state } = useContext(StateContext);
    const BASE_URL = "https://react-finale-default-rtdb.firebaseio.com";

    useEffect(() => {
        const fetchDish = async () => {
            const url = `${BASE_URL}/instruments.json`;
            const data = await request({ url });
            const found = data.find(element => element.id === index);
            dispatch({
                type: actions.SET_INSTRUMENT,
                payload: found
            });
            console.log(data)
        };
        fetchDish();
    }, [index, request, dispatch])

    return (
        <MenuContext.Provider>

            <div className="container-fluid">
                <Navbar />
                <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center py-5">
                    <div className="card h-100">
                        {/* <!-- Product image--> */}
                        <img className="card-img-top" src={`${state.instrument?.image}`} />
                        {/* <!-- Product details--> */}
                        <div className="card-body p-4">
                            <div className="text-center">
                                {/* <!-- Product name--> */}
                                {/* <h5 className="fw-bolder">{state.meal?.name}</h5> */}
                                <h5 className="fw-bolder">{state.instrument?.name}</h5>
                                {/* <!-- Product reviews--> */}
                                <div className="d-flex justify-content-center small text-warning mb-2">
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-fill"></div>
                                    <div className="bi-star-unfill"></div>
                                </div>
                                {/* <!-- Product price--> text-decoration-line-through */}
                                <span className="text-muted">${state.instrument?.price}</span>
                            </div>
                        </div>
                        {/* <!-- Product actions--> */}
                        <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                            <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                        </div>
                    </div>
                </div >
                
                <Footer />
            </div>
        </MenuContext.Provider>
    )
}

export default Instrument;