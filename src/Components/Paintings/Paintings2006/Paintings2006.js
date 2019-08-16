import React, {Component} from 'react';


export default class Paintings2006 extends Component {
    state = {
        images: [
            "https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-1.jpg",
            "https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-2.jpg",
            "https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-3.jpg",
            "https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-4.jpg",
            "https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-5.jpg",
        ]
    };

    render() {

        let images = this.state.images.map((e, i) => {
            return (
                <div className="images-container">
                    <li key={i}>
                    <img src={e} alt="" />
                </li>
            </div>
        )})
    
    return (
        <div className='paintings-container'>
            {images}
                    {/* <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-1.jpg" alt='The Final Round'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-2.jpg" alt="It's Not Enough"/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-3.jpg" alt='The Only One'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-4.jpg" alt='Make it Tomorrow'/>
                    <img className='mobile-images' src="https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/paintings/2006/paintings2006-5.jpg" alt='Go Ahead'/> */}
        </div>
        
    )
    }
}