 import React from 'react'
 import PropTypes from 'prop-types'
// import {Link} from "react-router-dom";
 
import image from './logo.png'


 export default function Navbar(props) {

  return (

   <>
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
        
        <a href='/'><img  src={image} height={40} width={60} alt="logo" style={{borderRadius:"15px",marginRight:"10px"}}/></a>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-a active" aria-current="page" href="#" style={{textDecoration:"none",color:props.mode==='dark'?'white':'black',marginRight:"20px"}}>Home</a>
            {/* <Link className="nav-a active" aria-current="page" to="/" style={{textDecoration:"none",color:props.mode==='dark'?'white':'black',marginRight:"20px"}}>Home</Link> */}
          </li>
          <li className="nav-item">
            
            {/* <Link className="nav-a" to="/about" style={{textDecoration:"none",color:props.mode==='dark'?'white':'black',marginRight:"20px"}}>{props.aboutText}</Link> */}
            <a className="nav-a" href="#" style={{textDecoration:"none",color:props.mode==='dark'?'white':'black',marginRight:"20px"}}>{props.aboutText}</a>
          </li>

          <li>
            <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          </li>
          </ul>
          <div class={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
          <input onClick={props.togglemode} class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" unchecked/>
          <label class="form-check-label" for="flexSwitchCheckChecked">Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>

    </>
   )
 }
 Navbar.propTypes={title:PropTypes.string.isRequired,aboutText :PropTypes.string.isRequired};

 Navbar.defaultProps={title:"Title",aboutText : "About Us"}