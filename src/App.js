import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Checkout from './components/pages/Checkout';
import Instrument from './components/pages/instrument';
import Menu from "./components/pages/Menu"
import NotFound from './components/pages/not-found';
import StateContext from './components/Contexts/StateContext';
import React, { useReducer } from 'react';
import reducer from './components/Reducers/Reducer';
import InitialState from './components/Reducers/InitialState';
import Scripts from '../src/components/Styles/Scripts';
import Modal from '../src/components/UI/Modal';
import Login from './components/pages/Login';
import Signup from './components/pages/Signup'
function App() {

    const [state, dispatch] = useReducer(reducer, InitialState);

    return (
        <StateContext.Provider value={{ state, dispatch }}>

            <BrowserRouter>
                <Modal />

                <Scripts />
                <Routes>
                    <Route path='/login' element={<Login />} />
                    <Route path='/signup' element={<Signup />} />
                    <Route path='/menu' element={<Menu />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/instruments/:index' element={<Instrument />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </StateContext.Provider>

    )
}

export default App;