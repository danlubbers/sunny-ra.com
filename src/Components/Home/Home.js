import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllHomeImages } from '../../ducks/reducer';

class Home extends Component {
    // state = {
    //     images: [
    //         'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/black-sand.jpg',
    //         'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/mammoth.jpg',
    //         'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/flight.jpg',
    //         'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/manta.jpg',
    //         'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/kinetic.jpg',
    //         'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/might.jpg',
    //         'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/radiate.jpg',
    //         'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/nebula.jpg',
    //         'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/chase.jpg',
    //         'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/harvest.jpg',
    //         'https://s3.amazonaws.com/content.danlubbers.com/sunny-content/images/home/expedition.jpg'
    //     ],
    //     imageData: []
    // };

    componentDidMount() {
        console.log('MOUNTING: ', this.props.getAllHomeImages());
        this.props.getAllHomeImages().then((whatever => {console.log('resolved: ', whatever)}))
    }

    render() {
        if(this.props.getAllHomeImages) {
        var test = this.props.homeImages.map((e, i) => {
            return (
                <div className='images-container' key={i}>
                    <li>
                        <h1>{e.title}</h1>
                        <h5>{e.dimensions} {e.medium}</h5>
                        
                        <img src={e.img} alt={e.title}/>
                    </li>
            </div>
        )})
}

        return(
            <div className='home-container-desktop'>
                {test}
                
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        homeImages: state.allHomeImages
    }
}

export default connect(mapStateToProps,  {getAllHomeImages}) (Home);