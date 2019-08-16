import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Paintings2008 extends Component {
    
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
                    <h1>2008 Paintings</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1  className='text-overlay'>Float</h1>
                                    <h2>46in x 70in oil on canvas October 2009 SOLD</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-1.jpg" alt="Float"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1  className='text-overlay'>Left Behind</h1>
                                <h2>42in x 32in oil on canvas October 2010 SOLD</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-2.jpg" alt="Left Behind"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1 className='text-overlay-2'>Fallen</h1>
                                <h2 className='text-overlay-2'>20in x 46in oil on canvas November 2009 SOLD</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-3.jpg" alt="Fallen"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1 className='text-overlay-2'>Taking You Out</h1>
                                <h2 className='text-overlay-2'>20in x 46in oil on canvas October 2009 SOLD</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-4.jpg" alt="Taking You Out"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1 className='text-overlay-2'>Aftershock</h1>
                                <h2 className='text-overlay-2'>20in x 46in oil on canvas September 2009</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-5.jpg" alt="Aftershock"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1 className='text-overlay-2'>Burn Out Bright</h1>
                                <h2 className='text-overlay-2'>20in x 46in oil on canvas September 2009</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-6.jpg" alt="Burn Out Bright"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1 className='text-overlay-2'>Runway</h1>
                                <h2 className='text-overlay-2'>20in x 46in oil on canvas August 2009</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-7.jpg" alt="Runway"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                {/* <h1  className='text-overlay'></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-8.jpg" alt="untitled"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                <h1  className='text-overlay'>Blur</h1>
                                <h2>16ft across acrylic paint, pastel, graphite, vellum and canvas November 2009</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-9.jpg" alt="Blur"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-1.jpg" alt='Float'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-2.jpg" alt='Left Behind'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-3-mobile.jpg" alt='Fallen'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-4-mobile.jpg" alt='Taking You Out'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-5-mobile.jpg" alt='Aftershock'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-6-mobile.jpg" alt='Burn Out Bright'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-7-mobile.jpg" alt='Runway'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-8-mobile.jpg" alt='untitled'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2008/paintings2008-9.jpg" alt='Blur'/>
                </div>
        </div>
    )
    }
}