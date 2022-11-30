import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {FaBell} from 'react-icons/fa'
import {FiUser} from 'react-icons/fi'
import './Search.css'

export default function Search() {
  return (
    <div>
      
            <div className="row m-5">
            <div className="col-8 SeachFather d-flex">
                <input className='form-control ps-5 rounded-pill Search' style={{}} type="text" placeholder='Search' />
                <FaSearch className='SearchIcon'/>
            </div>
            <div className="col-1">
                <FaBell className='Bell'/>
                <span className='Point'></span>
            </div>
            <div className="col-3">
                <div className='UserFuther'>
                <FiUser />
                </div>
            </div>
            </div>
        
    </div>
  )
}
