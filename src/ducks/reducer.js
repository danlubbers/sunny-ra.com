import axios from "axios";

// Set InitialState
const InitialState = {
    allHomeImages: [],
    allImages: []
}

const ALL_HOME_IMAGES = 'ALL_HOME_IMAGES';
const ALL_IMAGES = 'ALL_IMAGES';

export function getAllHomeImages() {
    let homeImages = axios.get(`/api/getAllHomeImages`).then(res => {
        // console.log('test', res.data)
        return res.data
    })
        return {
            type: ALL_HOME_IMAGES,
            payload: homeImages
        }
}

export function getAllImages(category) {
    let allImages = axios.get(`/api/getImages/${category}`).then(res => {
        // console.log('ALLIMAGES: ', res.data)
        return res.data
    })
        return {
            type: ALL_IMAGES,
            payload: allImages
        }
}


export default function reducer(state=InitialState, action) {
    switch(action.type) {
        case ALL_HOME_IMAGES + '_FULFILLED':
            // console.log('Reducer test')
            return Object.assign( {}, state, {allHomeImages: action.payload});
        case ALL_IMAGES + '_FULFILLED':
            // console.log('Reducer test')
            return Object.assign( {}, state, {allImages: action.payload});
            default: 
                return state;
    }
}