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
        // Use for title heading of each gallery page
        const gallery = this.props.match.params.category.toUpperCase();
        let galleryTitle = '';
        // If the string contains numbers then split them up
        if(/\d/g.test(gallery)) {
            var regexNum = gallery.match(/\d/gi).map(e => +e).join('');
            // console.log(regexNum)
            var regexTitle = gallery.match(/[a-z]/gi).map(e => e).join('');
            galleryTitle = `${regexNum} ${regexTitle}`;
            // console.log(regexTitle);
        } else {
            // If not, just show the gallery title
            galleryTitle = gallery;
        }

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
                <h1 className='gallery-title'>
                    {galleryTitle}

                </h1>
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