import Carousel from 'react-bootstrap/Carousel';
import img from '../assets/Add a heading.png'
import imga from '../assets/ca.jpg'
import imgae from '../assets/er.jpg'



function DarkVariantExample() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src={img}
          alt="First slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imga}
          alt="Second slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className=" d-block w-100"
          src={imgae}
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;