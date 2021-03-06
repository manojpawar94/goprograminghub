function Navbar() {
    return <nav className="navbar navbar-expand-lg navbar-light bg-white ps-4 pe-4 border-bottom fw-bold">
        <div className="container-fluid">
            <a className="navbar-brand" href="/">Go Programming Hub</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/posts/python">Python</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/posts/golang">Go Language</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="/about">About Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default Navbar