import axios from "axios";

// Set InitialState
const InitialState = {
    allHomeImages: []
}

const ALL_HOME_IMAGES = 'ALL_HOME_IMAGES';

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

export default function reducer(state=InitialState, action) {
    switch(action.type) {
        case ALL_HOME_IMAGES + '_FULFILLED':
            // console.log('Reducer test')
            return Object.assign( {}, state, {allHomeImages: action.payload});
            default: 
                return state;
    }
}