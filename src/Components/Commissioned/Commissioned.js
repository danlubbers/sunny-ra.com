import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Carousel extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 11,
            autoplay: false, 
            autoPlaySpeed: 1000,
            cssEase: "linear",
            pauseOnHover: true,
            adaptiveHeight: true,
            initialSlide: 0,
            centerMode: true,
            centerPadding: 0,
        };
    
    return (
        <div className='commissioned-container'>
            <div className='commissioned-container-desktop'>
                <div className='content-wrapper'>
                    <h1>Commissioned Works</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Botanica Gardens</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-1.jpg" alt="Botanical Gardens"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Botanica Gardens</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-2.jpg" alt="Botanical Gardens"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Botanica Gardens Plein Air</h1>
                                    <h2>12in x 12in Painting Competition September 2016</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-3.jpg" alt="Botanical Gardens"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>18in x 48in oil on canvas for Botanica show 2014</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-4.jpg" alt="Botanical Gardens"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>18in x 48in oil on canvas for Botanica show 2014</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-5.jpg" alt="Botanical Gardens"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>8in x 8in oil on canvas for LVA's Art Squared 2014</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-6.jpg" alt="LVA Squared"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>8in x 8in oil on canvas for LVA's Art Squared 2014</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-7.jpg" alt="LVA Squared"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Golden Gate</h1>
                                    <h2>42in x 34in oil on canvas 2013</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-8.jpg" alt="Golden Gate Bridge"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Detail of Golden Gate</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-9.jpg" alt="Golden Gate Bridge"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Detail of Golden Gate</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-10.jpg" alt="Golden Gate Bridge"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Drawing for painting</h1>
                                    <h2 className='text-overlay-2'>24in x 36in charcoal on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-11.jpg" alt="Golden Gate Bridge"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Drawing for painting</h1>
                                    <h2 className='text-overlay-2'>24in x 36in charcoal on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-12.jpg" alt="Golden Gate Bridge"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-1.jpg" alt='Botanica Gardens'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-2.jpg" alt='Botanica Gardens'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-3.jpg" alt='Botanica Gardens'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-4-mobile.jpg" alt='Botanica Gardens'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-5-mobile.jpg" alt='Botanica Gardens'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-6.jpg" alt='LVA Squared'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-7.jpg" alt='LVA Squared'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-8.jpg" alt='Golden Gate Bridge'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-9.jpg" alt='Golden Gate Bridge'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-10.jpg" alt='Golden Gate Bridge'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-11.jpg" alt='Golden Gate Bridge'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/commissioned/commissioned-12.jpg" alt='Golden Gate Bridge'/>
                </div>
        </div>
    )
    }
}