import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Paintings2010 extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 9,
            autoplay: true, 
            autoPlaySpeed: 1000,
            cssEase: "linear",
            pauseOnHover: true,
            adaptiveHeight: true,
            initialSlide: 0,
            centerMode: true,
            centerPadding: 0,
        };
    
    return (
        <div className='paintings-container'>
            <div className='paintings-container-desktop'>
            <div className='content-wrapper'>
                <h1>2010 Paintings</h1>
                <div className='carousel-container'>
                    <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Rise</h1>
                                <h2>50in x 74in oil on canvas December 2010</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-1.jpg" alt="Rise"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Regrets</h1>
                                <h2>62in x 82in oil on canvas November 2010</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-2.jpg" alt="Regrets"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>River</h1>
                                <h2>50in x 74in oil on canvas December 2010</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-3.jpg" alt="River"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Below</h1>
                                <h2>62in x 82in oil on canvas November 2010</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-4.jpg"alt="Below"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>Sliver</h1>
                                <h2>44in x 72in oil on canvas March 2010</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-5.jpg" alt="Sliver"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay-2'>Steel</h1>
                                <h2 className='text-overlay-2'>oil on canvas 2010</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-6.jpg" alt="Steel"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay-2'>Flourescent</h1>
                                <h2 className='text-overlay-2'>oil on canvas 2010</h2>
                            </div>
                            <div>
                                <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-7.jpg" alt="Flourescent"/>
                            </div>
                        </div>
                        <div className='image-wrapper'>
                            <div className='text-box'>
                                <h1 className='text-overlay'>detail of flourescent</h1>
                            </div>
                            <div>
                                <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-8.jpg" alt="Flourescent"/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
            <div className='images-container-mobile'>
                <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-1.jpg" alt='Rise'/>
                <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-2.jpg" alt='Regrets'/>
                <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-3.jpg" alt='River'/>
                <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-4.jpg"alt='Below'/>
                <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-5.jpg" alt='Sliver'/>
                <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-6-mobile.jpg" alt='Steel'/>
                <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-7-mobile.jpg" alt='Flourescent'/>
                <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2010/paintings2010-8.jpg" alt='Flourescent'/>
            </div>
        </div>
    )
    }
}