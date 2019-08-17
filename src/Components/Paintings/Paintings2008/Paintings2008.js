import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getAllPaintings2008 } from '../../../ducks/reducer';


class Paintings2008 extends Component {

    componentDidMount() {
        this.props.getAllPaintings2008().then((data => {console.log('resolved: ', data)}))
    }

    render() {

        if(this.props.getAllPaintings2008) {
            var imageData = this.props.paintings2008.map((e, i) => {
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
        paintings2008: state.allPaintings2008
    }
}

export default connect(mapStateToProps,  {getAllPaintings2008}) (Paintings2008);