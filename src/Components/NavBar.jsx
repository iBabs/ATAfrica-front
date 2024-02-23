import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Nav.css'

function NavBar() {
  return (
    <header>
        <Link to='/'><h2 className="logo">Stocka</h2></Link>

        <nav>
            <ul>
                <li>
                    <NavLink>Cash</NavLink>
                </li>
                <li>
                    <NavLink>Bond</NavLink>
                </li>
                <li>
                    <NavLink>Automated Investing</NavLink>
                </li>
                <li>
                    <NavLink>Stocks</NavLink>
                </li>
                <li>
                    <NavLink>Learn</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            <button className='login'>
                Login
            </button>
            <button className='signup'>
                Get Started
            </button>
        </div>
    </header>
  )
}

export default NavBar