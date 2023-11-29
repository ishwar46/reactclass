import React from 'react'

export const Navbar = () => {
  return (
      <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand text-danger fw-bold" href="#">Frontend</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Products</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Category
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">Clothing</a></li>
            <li><a className="dropdown-item" href="#">Eye Wear</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Flash Sale</a></li>
          </ul>
        </li>
        
      </ul>
      <form className="d-flex gap-2" role="search">
        <button className="btn btn-outline-success" type="submit">Login</button>
        <button className="btn btn-outline-danger" type="submit">Register</button>
      </form>
    </div>
  </div>
</nav>
      </>
  )
}


//rafc