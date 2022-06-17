import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import  './Card1.css'
const Carousels = () => {
  return (
    <div>

<Carousel>
  <Carousel.Item interval={700}>
    <img
      className="d-block w-100"
      src="https://image.shutterstock.com/image-illustration/machine-code-languages-on-blue-260nw-1680857539.jpg"
      alt="First slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={700}>
    <img
      className="d-block w-100 "
      src="https://extension.harvard.edu/wp-content/uploads/sites/8/2020/10/computer-programming.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={1000}>
    <img
      className="d-block w-100"
      src="https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227__340.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
      <h3></h3>
      <p></p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>


    </div>
  )
}

export default Carousels