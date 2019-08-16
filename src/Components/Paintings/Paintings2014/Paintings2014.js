import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Paintings2014 extends Component {
    
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
                    <h1>2014 Paintings</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Curl</h1>
                                    <h2 className='text-overlay-2'>30in x 48in oil on canvas 2014</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-1.jpg" alt="Curl"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Split</h1>
                                    <h2>44in x 68in oil on canvas 2014 N/A</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-2.jpg" alt="Split"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Molten</h1>
                                    <h2>46in x 30in oil on canvas 2014</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-3.jpg" alt="Molten"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>The Fall</h1>
                                    <h2>42in x 30in oil on canvas 2014</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-4.jpg" alt="The Fall"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Within Reach</h1>
                                    <h2>32in x 42in oil on canvas 2014 SOLD</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-5.jpg" alt="Within Reach"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Pacific</h1>
                                    <h2>48in x 30in oil on canvas 2014</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-6.jpg" alt="Pacific"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Negative Seven</h1>
                                    <h2 className='text-overlay-2'>30in x 44in oil on canvas 2014 N/A</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-7.jpg" alt="Negative Seven"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>detail of Negative Seven</h1>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-8.jpg" alt=""/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-1-mobile.jpg" alt='Curl'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-2.jpg" alt='Split'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-3.jpg" alt='Molten'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-4.jpg" alt='The Fall'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-5.jpg" alt='Within Reach'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-6.jpg" alt='Pacific'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-7-mobile.jpg" alt='Negative Seven'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2014/paintings2014-8.jpg" alt='Negative Seven'/>
                </div>
        </div>
    )
    }
}