import { createStore} from 'redux';
import RootReducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';

export default createStore(RootReducer, composeWithDevTools());