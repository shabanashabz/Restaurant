import React, { useEffect } from 'react'
import RestCard from '../components/RestCard'
import { Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRestuarant } from '../redux/restuarantSlice'

function Home() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(fetchRestuarant())
    },[])
    const allRestaurant = useSelector((state)=>state.restuarantSlice.allRestuarant.restaurants);
    console.log('1');
    console.log(allRestaurant);  
  return (
    <>
        <Row className='mt-3'>
            {
                allRestaurant?.length>0?
                allRestaurant.map((restaurant)=>(
                    <Col sm={6} md={4} lg={3} className='px-5 py-3'>
                    <RestCard restaurant={restaurant}/>
                    </Col>
                )):
                <p>no items found</p>
            }     
        </Row>
       
    </>
  )
}

export default Home