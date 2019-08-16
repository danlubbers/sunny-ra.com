import React, {Component} from 'react';
import Slider from 'react-slick';

export default class Works2009 extends Component {
    
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
                    <h1>2009 Works on Paper</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Take Off</h1>
                                    <h2 className='text-overlay-2'>33in x 66in pastel on paper</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-1.jpg"alt="Take Off"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Break #2</h1>
                                    <h2 className='text-overlay-2'>conte on mylar 42in x 36in</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-2.jpg" alt="Break #2"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Break #1</h1>
                                    <h2 className='text-overlay-2'>conte on mylar 42in x 36in</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-3.jpg" alt="Break #1"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>The Peak</h1>
                                    <h2>8in x 6in etching May 2010</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-4.jpg" alt="The Peak"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Spin</h1>
                                    <h2>6in x 4.5in etching April 2010</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-5.jpg" alt="Spin"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Shrapnel</h1>
                                    <h2>4in x 6in etching February 2010</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-6.jpg" alt="Shrapnel"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Barrier</h1>
                                    <h2>10in x 8in pastel on paper March 2010 SOLD</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-7.jpg" alt="Barrier"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Lit</h1>
                                    <h2>8in x 10in pastel on paper March 2010 SOLD</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-8.jpg" alt="Lit"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Signal</h1>
                                    <h2>10in x 8in pastel on paper February 2010</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-9.jpg" alt="Signal"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Atlantic</h1>
                                    <h2>8in x 10in pastel on paper February 2010</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-10.jpg" alt="Atlantic"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Unearth #1</h1>
                                    <h2 className='text-overlay-2'>24in x 36in conte on vellum December 2009</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-11.jpg" alt="Unearth #1"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Unearth #2</h1>
                                    <h2 className='text-overlay-2'>24in x 36in conte on vellum December 2009</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-12.jpg" alt="Unearth #2"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Wall Installation mixed media</h1>
                                    <h2>on collaged paper October 2009</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-13.jpg"alt="Wall Installation"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay-2'>Raging</h1>
                                    <h2 className='text-overlay-2'>36in x 52in pastel and acrylic on collaged paper April 2009</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-14.jpg" alt="Raging"/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Addition Subtraction</h1>
                                    <h2>38in x 50in pastel and acrylic on collaged paper August 2008</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-15.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    <h1 className='text-overlay'>Fragments of Memories</h1>
                                    <h2>50in x 38in pastel and acrylic on collaged paper May 2008</h2>
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-16.jpg" alt=""/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
                <div className='images-container-mobile'>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-1-mobile.jpg" alt='Take Off'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-2.jpg" alt='Break #2'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-3.jpg" alt='Break #1'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-4.jpg" alt='The Peak'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-5.jpg" alt='Spin'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-6.jpg" alt='Shrapnel'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-7.jpg" alt='Barrier'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-8.jpg" alt='Lit'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-9.jpg" alt='Signal'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-10.jpg" alt='Atlantic'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-11.jpg" alt='Unearth #1'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-12.jpg" alt='Unearth #2'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-13.jpg"alt='Wall Installation'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-14.jpg" alt='Raging'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-15.jpg" alt='Addition Subtraction'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/works/2009/works2009-16.jpg" alt='Fragments of Memories'/>
                </div>
        </div>
    )
    }
}