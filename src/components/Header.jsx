import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchRestaurant } from '../redux/restuarantSlice';

function Header() {
    const dispatch = useDispatch()
  return (
    <>
        <Navbar className="bg-dark mt-3">
        <Container>
        <Link to={'/'} style={{textDecoration:'none',overflowY:'hidden'}} >
        <div className='d-flex justify-content-between align-items-center'>
        <Navbar.Brand>
            <img
              alt=""
              src="https://cdn-icons-png.freepik.com/256/6643/6643359.png?semt=ais_hybrid"
              width="30"
              height="30"
              className="d-inline-block align-top me-3"
            />{' '}
            FOOD <span className='text-warning '>CIRCLE </span>
          </Navbar.Brand>
          <input onChange={(e)=>dispatch(searchRestaurant(e.target.value))} type="text" className='form-control ms-5 w-100' placeholder='Search by Neighborhood' />
        </div>
          </Link>
        </Container>
      </Navbar>
    </>
  )
}

export default Header