import axios from 'axios';
import { insuranceUrl } from '../../api';

import { FORMTYPES, RECOMMENDTYPES, ERRORTYPES } from './types';
import { _setAuthToken } from '../../utils/utilFunctions';

export const setFormData = (formData) => (dispatch) => {
  dispatch({ type: FORMTYPES.SET_FORM_DATA, payload: formData });
};

export const setCurrentFormStep = (formStep) => (dispatch) => {
  dispatch({ type: FORMTYPES.CURRENT_FORM_STEP, payload: formStep });
};

export const createUser = (userData, redirectCallback) => (dispatch) => {
  dispatch({ type: FORMTYPES.LOAD_START });
  dispatch({ type: ERRORTYPES.RESET_ERROR });

  axios
    .post(`${insuranceUrl}/user`, userData)
    .then((res) => {
      localStorage.setItem('JWT', res.data.jwt);
      _setAuthToken(res.data.jwt);
    })
    .then(() => {
      redirectCallback('/recommendations');
    })
    .catch((err) => {
      const errMsg = Object.values(err.response.data.errors);
      dispatch({
        type: ERRORTYPES.ERROR_MSG,
        payload: errMsg[0],
      });
    })
    .finally(() => {
      dispatch({ type: FORMTYPES.LOAD_COMPLETE });
    });
};

export const getRecommendations = () => (dispatch) => {
  const token = localStorage.JWT;
  _setAuthToken(token);

  dispatch({ type: RECOMMENDTYPES.LOAD_START });
  dispatch({ type: ERRORTYPES.RESET_ERROR });

  axios
    .get(`${insuranceUrl}/recommendation`)
    .then((res) => {
      dispatch({ type: RECOMMENDTYPES.GET_RECOMMENDATIONS, payload: res.data });
    })
    .catch((err) => {
      const errMsg = Object.values(err.response.data.errors);
      dispatch({
        type: ERRORTYPES.ERROR_MSG,
        payload: errMsg[0],
      });
    })
    .finally(() => {
      dispatch({ type: RECOMMENDTYPES.LOAD_COMPLETE });
    });
};
