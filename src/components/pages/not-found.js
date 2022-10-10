import { Link } from 'react-router-dom'

function NotFound() {
    return (
        <div>
            <div className="card">
                <div className="card-body">
                <Link to="/menu?#!">
                        <button type="button" className="btn btn-outline-success bi bi-handbag bc-white">MENU</button>
                    </Link>
                    <h1 className="text-center" style={{fontFamily: "fantasy"}}>PAGE NOT FOUND</h1>
                    <p className="text-center">Return into the home page</p>
                </div>
            </div>

            <div>
                <div class="container px-4 px-lg-5 my-5 d-flex justify-content-center">
                    <img width={1000} height={550} src="https://seranking.com/blog/wp-content/uploads/2021/01/404_01-min.jpg" />
                </div>
            </div>

        </div>
    )
}

export default NotFound;