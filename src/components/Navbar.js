import React from 'react'

import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar (props) {

  function BtnRender() {
    if (props.mode === 'light') {

      document.querySelector('#theme').innerText = "Light Mode "
      document.querySelector('#theme').classList.remove("btn-dark")
      document.querySelector('#theme').classList.add("btn-light")

    }
    else {
      document.querySelector('#theme').innerText = "Dark Mode "
      document.querySelector('#theme').classList.add("btn-dark")
      document.querySelector('#theme').classList.remove("btn-light")
    }
  }
  
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`} >
    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">About</Link>
          </li>
          
          
        </ul>
        
          
          <button className="btn btn-dark mx-4  " id='theme' onClick={() => { props.toggleMode(); BtnRender(); }}>Dark Mode </button>
        
      </div>
    </div>
  </nav>
  )
}

// navbar.PropTypes = {

//     title : PropTypes.string

// }

Navbar.propTypes = {
    title :PropTypes.string
}

Navbar.defaultProps ={
    title :"AMD-text"
}