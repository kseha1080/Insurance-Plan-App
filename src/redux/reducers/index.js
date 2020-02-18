import { combineReducers } from 'redux';

import insuranceFormReducers from './insuranceFormReducers';
import recommendationsReducers from './recommendationsReducers';
import errorReducers from './errorReducers';

export const rootReducer = combineReducers({
  insuranceForm: insuranceFormReducers,
  recommendations: recommendationsReducers,
  error: errorReducers,
});
