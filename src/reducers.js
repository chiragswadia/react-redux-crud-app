import { combineReducers } from 'redux';
import merchantReducer from './reducers/merchantReducer';
import { reducer as formReducer } from 'redux-form'

const reducers = combineReducers({
    merchantReducer,
    form: formReducer
});

export default reducers;