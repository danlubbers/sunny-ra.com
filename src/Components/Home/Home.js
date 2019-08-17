import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllHomeImages } from '../../ducks/reducer';

class Home extends Component {

    componentDidMount() {
        this.props.getAllHomeImages().then((data => {console.log('resolved: ', data)}))
    }

    render() {
        if(this.props.getAllHomeImages) {
        var imageData = this.props.homeImages.map((e, i) => {
            // console.log(e.orientation)
            if(e.orientation === 'horizontal') {
                
            }
            return (
                <ul className='images-container' key={i}>
                    <li>
                        <h1>{e.title}</h1>
                        <h5>{e.dimensions} {e.medium}</h5>
                        <img src={e.img} alt={e.title}/>
                    </li>
                </ul>
        )})
    }
    
    return(
        <div className='home-container-desktop'>
            {imageData}
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