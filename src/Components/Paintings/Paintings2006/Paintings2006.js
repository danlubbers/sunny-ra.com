// import React, {Component} from 'react';
// import { connect } from 'react-redux';
// import { getAllPaintings2006 } from '../../../ducks/reducer';


// class Paintings2006 extends Component {

//     componentDidMount() {
//         this.props.getAllPaintings2006().then((data => {
//             console.log('resolved: ', data)
//         }))
//     }

//     render() {

//         if(this.props.getAllPaintings2006) {
//             var imageData = this.props.paintings2006.map((e, i) => {
//                 return (
//                     <ul className='images-container' key={i}>
//                         <li>
//                             <h1>{e.title}</h1>
//                             <h5>{e.dimensions} {e.medium}</h5>
//                             <img src={e.img} alt={e.title}/>
//                         </li>
//                     </ul>
//             )})
//         }
        
//         return(
//             <article className='home-container-desktop'>
//                 {imageData}
//             </article>
//             )
//         }
//     }

// function mapStateToProps(state) {
//     return{
//         paintings2006: state.allPaintings2006
//     }
// }

// export default connect(mapStateToProps,  {getAllPaintings2006}) (Paintings2006);