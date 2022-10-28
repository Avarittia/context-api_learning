import React from 'react'
import { Container } from 'react-bootstrap'

const Banner = () => {
  return (
    <div className='mb-5' style={{height:'700px'}}>
      <Container fluid className='p-0 position-relative' style={{height:'100%'}}>
        <div className='position-absolute text-light d-flex justify-content-center flex-column px-5'  style={{background:'black', width:'100%', height:'100%', opacity:'.5', letterSpacing:'2px'}}>
          <h1 className='ms-5  fs-1'>
            The <span className='text-primary'>Best</span> 
          </h1>
          <h1 className='ms-5  fs-1'>Food <span className='text-primary'> Available</span></h1>
        </div>
        <img alt='/' src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"  style={{height:'100%', width:'100%', objectFit:'cover'}} />
      </Container>
    </div>
  )
}

export default Banner