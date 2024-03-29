function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white ps-4 pe-4 border-bottom ">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          GoProgrammingHub
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0"></div>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/posts/programming/golang">
                GOLANG
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/posts/programming/python">
                PYTHON
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/posts/programming/scala">
                SCALA
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link"  href="/posts/bigdata/apache-spark">
               APACHE SPARK
              </a>
            </li>
            {/*<li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                PROGRAMMING
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="/posts/programming/python">
                    PYTHON
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="/posts/programming/golang">
                    GOLANG
                  </a>
                </li>
              </ul>
            </li>
            
            <li className="nav-item">
              <a
                className="nav-link"
                href="/posts/data-structures-and-algorithms"
              >
                DSA
              </a>
            </li>
            */}
            <li className="nav-item">
              <a className="nav-link" href="/posts/problemsolving">
                PROBLEM SOLVING
              </a>
            </li>
            {/** <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                BIGDATA
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a
                    className="dropdown-item"
                    href="/posts/bigdata/apache-spark"
                  >
                    APACHE SPARK
                  </a>
                </li>
              </ul>
            </li>
           
                <li className="nav-item">
                    <a className="nav-link" href="/about">ABOUT</a>
                 </li>
            */}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
