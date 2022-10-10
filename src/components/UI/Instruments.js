import React, { useContext, useRef } from 'react';
import MenuContext from '../Contexts/MenuContext';
import StateContext from '../Contexts/StateContext';
import actions from '../Reducers/Actions';
import { Link } from "react-router-dom"

function Instruments() {

  const inputs = useRef([]);
  // const meals = useContext(MenuContext);
  const instruments = useContext(MenuContext);
  const { dispatch } = useContext(StateContext);

  function addInstruments(index) {

    // const meal = meals[index];
    const instrument = instruments[index];
    const input = inputs.current[index];

    if (input.value) {
      dispatch({
        type: actions.ADD_INSTRUMENT,
        payload: { instrument, quantity: parseInt(input.value) },
      });

      input.value = "";
    }
  }


  return (
    <main id='main'>
      <section id="menu" className="menu bc-dark">
        <div className="container">
          {instruments.map((item, index) => (
            <div class="row gx-4 gx-lg-5  row-cols-xl-2 justify-content-center py-3">
              <div className="card h-300">
                {/* <!-- Product image--> */}
                <img className="card-img-top" src={`${item.image}`} />
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                  <div className="text-center">
                    {/* <!-- Product name--> */}
                    <h5 className="fw-bolder" style={{fontFamily: "inherit"}}>{item.name}</h5>
                    {/* <!-- Product reviews--> */}
                    <div className="d-flex justify-content-center small text-warning mb-2">
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                      <div className="bi-star-fill"></div>
                    </div>
                    {/* <!-- Product price--> text-decoration-line-through */}
                    <span className="text-muted">${item.price}</span>
                  </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                  <div className="text-center">
                    <input type="number" min="1" ref={(el) => (inputs.current[index] = el)} className="form-control" style={{ width: "100%", flex: "none" }} placeholder="Cantidad" aria-label="Cantidad" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-dark mt-auto" type="button" id="button-addon2" onClick={() => addInstruments(index)}>Add to cart</button>
                  </div>
                </div>
              </div>
            </div >
          ))}
        </div>
      </section>
    </main>
  )
}

export default Instruments