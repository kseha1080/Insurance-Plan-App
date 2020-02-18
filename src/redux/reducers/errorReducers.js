import { ERRORTYPES } from '../actions/types';

const INITIAL_STATE = {
  errorMsg: '',
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ERRORTYPES.ERROR_MSG:
      return {
        ...state,
        errorMsg: action.payload,
      };
    case ERRORTYPES.RESET_ERROR:
      return {
        ...state,
        errorMsg: '',
      };
    default:
      return state;
  }
};
