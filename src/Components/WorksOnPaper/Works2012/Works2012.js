import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Works2012 extends Component {
    
    render() {

        var settings = {
            dots: true, 
            arrows: false,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToSlide: 5,
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
        <div className='works-container'>
            <div className='works-container-desktop'>
                <div className='content-wrapper'>
                    <h1>2012 Works on Paper</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>untitled</h1>
                                    <h2>48in x 72in conte and pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-1.jpg" alt="untitled"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>untitled</h1>
                                    <h2 className='text-overlay-2'>48in x 78in conte and pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-2.jpg" alt="untitled"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Backwards</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-3.jpg" alt="Backwards"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Glide</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-4.jpg" alt="Glide"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Sled</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-5.jpg" alt="Sled"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Lowland</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-6.jpg" alt="Lowland"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Mobile</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-7.jpg" alt="Mobile"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Nite Light</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-8.jpg" alt="Nite Light"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Willow</h1>
                                    <h2>8in x 10in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-9.jpg" alt="Willow"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Passing</h1>
                                    <h2>18in x 24in charcoal on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-10.jpg" alt="Passing"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>By Force</h1>
                                    <h2>18in x 24in charcoal on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-11.jpg" alt="By Force"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>DC Subway</h1>
                                    <h2>18in x 24in charcoal on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-12.jpg" alt="DC Subway"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Ravine</h1>
                                    <h2>18in x24in charcoal on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-13.jpg" alt="Ravine"/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-1.jpg" alt='untitled'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-2-mobile.jpg" alt='untitled'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-3.jpg" alt='Backwards'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-4.jpg" alt='Glide'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-5.jpg" alt='Sled'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-6.jpg" alt='Lowland'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-7.jpg" alt='Mobile'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-8.jpg" alt='Nite Light'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-9.jpg" alt='Willow'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-10.jpg" alt='Passing'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-11.jpg" alt='By Force'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-12.jpg" alt='DC Subway'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2012/works2012-13.jpg" alt='Ravine'/>
                </div>
        </div>
    )
    }
}