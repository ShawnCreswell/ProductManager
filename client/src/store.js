import { combineReducers, applyMiddleware} from 'redux';
import { legacy_createStore as createStore} from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { guardLoginReducer } from './reducers/guardReducer';

const reducer = combineReducers({
  //this will contain our reducers
  guardLogin: guardLoginReducer,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

