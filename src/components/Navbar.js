import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import Searchbar from './Searchbar'

const Navbar = () => {
  return (
    <div className='navbar'>
    <nav>
            <Link to={'/'} className='brand'>
                 <h1>Movie Reviews</h1>
            </Link>
            <Searchbar/>
            {/*<Link to={'/create'}><h1>Create Recipe</h1></Link>*/}
    </nav>
</div>
  )
}

export default Navbar