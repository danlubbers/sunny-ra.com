import axios from "axios";

// Set InitialState
const InitialState = {
    allHomeImages: [],
    allPaintings2006: [],
    allPaintings2008: []
}

const ALL_HOME_IMAGES = 'ALL_HOME_IMAGES';
const PAINTINGS_2006_IMAGES = 'PAINTINGS_2006_IMAGES';
const PAINTINGS_2008_IMAGES = 'PAINTINGS_2008_IMAGES';

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

export function getAllPaintings2006() {
    let paintings2006 = axios.get(`/api/getAllPaintings2006`).then(res => {
        console.log('test', res.data)
        return res.data
    })
        return {
            type: PAINTINGS_2006_IMAGES,
            payload: paintings2006
        }
}

export function getAllPaintings2008() {
    let paintings2008 = axios.get(`/api/getAllPaintings2008`).then(res => {
        console.log('test', res.data)
        return res.data
    })
        return {
            type: PAINTINGS_2008_IMAGES,
            payload: paintings2008
        }
}


export default function reducer(state=InitialState, action) {
    switch(action.type) {
        case ALL_HOME_IMAGES + '_FULFILLED':
            // console.log('Reducer test')
            return Object.assign( {}, state, {allHomeImages: action.payload});
        case PAINTINGS_2006_IMAGES + '_FULFILLED':
                // console.log('Reducer test')
            return Object.assign( {}, state, {allPaintings2006: action.payload});
        case PAINTINGS_2008_IMAGES + '_FULFILLED':
                // console.log('Reducer test')
            return Object.assign( {}, state, {allPaintings2008: action.payload});
            default: 
                return state;
    }
}