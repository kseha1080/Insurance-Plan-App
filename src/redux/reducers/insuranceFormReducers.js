import { FORMTYPES } from '../actions/types';

const INITIAL_STATE = {
  formStep: 0,
  formData: {
    firstName: '',
    address: '',
    occupation: 'EMPLOYED',
    hasChildren: false,
    numberOfChildren: 0,
    email: '',
  },
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FORMTYPES.CURRENT_FORM_STEP:
      return {
        ...state,
        formStep: action.payload,
      };
    case FORMTYPES.SET_FORM_DATA:
      return {
        ...state,
        formData: action.payload,
      };
    case FORMTYPES.LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case FORMTYPES.LOAD_COMPLETE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
