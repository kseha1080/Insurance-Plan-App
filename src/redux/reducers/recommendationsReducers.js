import { RECOMMENDTYPES } from '../actions/types';

const INITIAL_STATE = {
  recommmendationsList: [],
  loading: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RECOMMENDTYPES.GET_RECOMMENDATIONS:
      return {
        ...state,
        recommendationsList: action.payload,
      };
    case RECOMMENDTYPES.LOAD_START:
      return {
        ...state,
        loading: true,
      };
    case RECOMMENDTYPES.LOAD_COMPLETE:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
