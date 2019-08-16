// Always impoert {createStore} and render
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducer';
// import to use promiseMiddleware
import promiseMiddleware from 'redux-promise-middleware'

// put promiseMiddleware() ont a variable called middleware
const middleware = applyMiddleware(promiseMiddleware)

// Export createStore by default and pass it 'reducer' as it's arguement
export default createStore(reducer, middleware);