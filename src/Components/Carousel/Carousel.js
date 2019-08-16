import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Carousel extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 1,
            autoplay: true, 
            autoPlaySpeed: 1000,
            cssEase: "linear",
            pauseOnHover: true,
            adaptiveHeight: false,
            initialSlide: 0,
            centerMode: true,
            centerPadding: 0,

        };
    
    return (
        <div className='content-wrapper'>
            <br />
            <div className='carousel-container'>
                <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
            
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Black Sand</h1>
                            <h2>44in x 68in Oil on Canvas</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/black-sand.jpg" alt="Black Sand"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Mammoth</h1>
                            <h2>42in x 38in Oil on Canvas</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/mammoth.jpg" alt="Mammoth"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Flight</h1>
                            <h2>11in x 14in Oil on Paper</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/flight.jpg" alt="Flight"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Manta</h1>
                            <h2>16in x 20in Oil on Canvas mounted on panel</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/manta.jpg" alt="Manta"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Kinetic</h1>
                            <h2>14in x 11in Oil on Paper</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/kinetic.jpg" alt="Kinetic"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Might</h1>
                            <h2>11in x 14in Oil on Paper</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/might.jpg" alt="Might"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Radiate</h1>
                            <h2>32in x 48in Oil on Canvas</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/radiate.jpg" alt="Radiate"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Nebula</h1>
                            <h2>12in x 16in Oil on Canvas mounted on Panel "SOLD"</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/nebula.jpg" alt="Nebula"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Chase</h1>
                            <h2>16in x 12in Oil on Canvas mounted on Panel "SOLD"</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/chase.jpg" alt="Chase"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Harvest</h1>
                            <h2>11in x 14in Oil on Paper</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/harvest.jpg" alt="Harvest"/>
                        </div>
                    </div>
                    <div className='image-wrapper'>
                        <div className='text-box'>
                            <h1 className='text-overlay'>Expedition</h1>
                            <h2>16in x 12in Oil on Canvas mounted on Panel</h2>
                        </div>
                        <div>
                            <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/expedition.jpg" alt="Expedition"/>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
    }
}