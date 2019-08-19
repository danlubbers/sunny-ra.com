import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getAllImages } from '../../ducks/reducer';

class Collections extends Component {

    componentDidMount() {
        this.props.getAllImages(this.props.match.params.category).then((data => {console.log('Collections: ', data)}))
        // console.log(this.props.match.params.category)
    }

    // This allows us to switch between Categories when clicking on the Link in the Header
    componentWillReceiveProps(nextProps) {
        if(this.props.match.params.category !== nextProps.match.params.category){
      
            this.props.getAllImages(nextProps.match.params.category)
            // console.log('nextProps: ', nextProps)
    }
}

    render() {
        // var gallery = this.props.match.params.category.toUpperCase();
        // console.log('render: ', gallery)

        if(this.props.getAllImages) {
            var imageData = this.props.allImages.map((e, i) => {
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

        return (
            <article className='home-container-desktop'>
                {imageData}
            </article>
        )
    }
}

function mapStateToProps(state) {
    return{
        allImages: state.allImages
    }
}

export default connect(mapStateToProps,  {getAllImages}) (Collections);