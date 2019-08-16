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
            slidesToSlide: 34,
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
        <div className='studentwork-container'>
            <div className='studentwork-container-desktop'>
                <div className='content-wrapper'>
                    <h1>Student Works</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-5.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-6.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-7.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1>G</h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-8.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-9.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-10.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-12.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-13.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-14.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-15.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-16.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-17.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-18.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-19.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-20.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-21.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-22.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-23.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-24.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-25.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-26.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-27.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-28.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-29.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-30.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-31.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-32.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-33.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-34.jpg" alt=""/>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
            </div>
            <div className='images-container-mobile'>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-1.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-2.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-3.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-4.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-5.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-6.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-7.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-8.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-9.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-10.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-11.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-12.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-13.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-14.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-15.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-16.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-17.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-18.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-19.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-20.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-21-mobile.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-22-mobile.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-23.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-24.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-25.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-26.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-27.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-28.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-29.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-30.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-31.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-32.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-33.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/studentwork/studentwork-34.jpg" alt=''/>
                </div>
        </div>
    )
    }
}