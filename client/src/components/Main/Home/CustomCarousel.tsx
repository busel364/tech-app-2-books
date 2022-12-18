import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { carouselPhotos } from '../../../utils/consts';

function CustomCarousel() {
    return (
        <Carousel className='mt-5'>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselPhotos[0]}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <div className='carouselDiv'>
                        <h3 className='m-5'>Check the Shop</h3>
                        <Link to={'shop'} className='carouselButton'>Shop</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselPhotos[1]}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <div className='carouselDiv'>
                        <h3 className='m-5'>Check the Menu</h3>
                        <Link to={'menu'} className='carouselButton'>Menu</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={carouselPhotos[2]}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <div className='carouselDiv'>
                        <h3 className='m-5'>Check the authors</h3>
                        <Link to={'authors'} className='carouselButton'>Authors</Link>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default CustomCarousel;