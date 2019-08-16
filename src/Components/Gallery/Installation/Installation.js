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
            slidesToSlide: 40,
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
        <div className='installation-container'>
            <div className='installation-container-desktop'>
                <div className='content-wrapper'>
                <h1>Installation Images</h1>
                    <div className='carousel-container'>
                        <Slider ref={slider => (this.slider = slider)}{...settings} style={{position: 'relative',    zIndex: '500 !important'}}>
                    
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-1.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-2.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-3.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-4.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-5.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-6.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-7.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1>G</h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-8.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-9.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-10.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-11.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-12.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-13.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-14.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-15.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-16.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-17.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-18.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-19.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-20.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-21.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-22.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-23.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-24.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-25.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-26.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-27.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-28.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-29.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-30.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-31.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-32.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-33.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-34.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-35.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-36.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-37.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-38.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-39.jpg" alt=""/>
                                </div>
                            </div>
                            <div className='image-wrapper'>
                                <div className='text-box'>
                                    {/* <h1></h1> */}
                                </div>
                                <div>
                                    <img className="carousel-image" src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-40.jpg" alt=""/>
                                </div>
                            </div>

                        </Slider>
                    </div>
                </div>
            </div>
            <div className='images-container-mobile'>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-1-mobile.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-2.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-3.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-4.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-5.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-6.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-7.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-8.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-9.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-10.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-11.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-12.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-13.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-14.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-15.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-16.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-17.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-18.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-19.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-20.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-21.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-22.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-23.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-24.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-25.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-26.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-27.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-28.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-29.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-30.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-31.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-32.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-33.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-34.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-35.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-36.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-37.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-38.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-39.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-39.jpg" alt=''/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/installation/installation-40.jpg" alt=''/>
                </div>
        </div>
    )
    }
}