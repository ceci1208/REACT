import React from 'react'
import { Link } from 'react-router-dom'

const NavbarCheck = () => {

    const img = "https://inspirationfeed.com/wp-content/uploads/2021/10/Thank-You-Memes-24.jpg";

    return (
        // Header
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container px-4 px-lg-5">
                    <a className="navbar-brand" href="#!">Chonita's Instruments</a>
                    <Link to="/menu?#!">
                        <button type="button" className="btn btn-outline-light bi bi-handbag bc-white">MENU</button>
                    </Link>
                </div>
            </nav>
            <header class="bg-dark py-5" style={{ display: "flex" }}>
                <div class="container">
                    <div class="text-center text-white">
                        <img src={`${img}`} />
                        <h1 class="display-4 fw-bolder pt-3">Shop in style</h1>
                        <p class="lead fw-normal text-white-50">Thank you for your purchase.</p>
                    </div>
                </div>
            </header>
        </div>

    )
}

export default NavbarCheck