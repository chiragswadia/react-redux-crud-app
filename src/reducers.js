import { combineReducers } from 'redux';
import merchantReducer from './reducers/merchantReducer';
import { reducer as formReducer } from 'redux-form';
import {reducer as toastrReducer} from 'react-redux-toastr';

const reducers = combineReducers({
    merchantReducer,
    form: formReducer,
    toastr: toastrReducer
});

export default reducers;