function CardObject() {
    return (
        <div class="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center py-5">
            <div className="card h-100">
                {/* <!-- Product image--> */}
                <img className="card-img-top" src=""/>
                {/* <!-- Product details--> */}
                <div className="card-body p-4">
                    <div className="text-center">
                        {/* <!-- Product name--> */}
                        <h5 className="fw-bolder">Special Item</h5>
                        {/* <!-- Product reviews--> */}
                        <div className="d-flex justify-content-center small text-warning mb-2">
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-fill"></div>
                            <div className="bi-star-unfill"></div>
                        </div>
                        {/* <!-- Product price--> text-decoration-line-through */}
                        <span className="text-muted">$20.00</span>
                    </div>
                </div>
                {/* <!-- Product actions--> */}
                <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Add to cart</a></div>
                </div>
            </div>
        </div >
    )
}

export default CardObject;