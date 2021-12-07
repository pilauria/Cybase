import axios from 'axios';
import axions from 'axios';
import {
  PRODUCT_LIST_REQUEST, //action
  PRODUCT_LIST_SUCCESS, //action
  PRODUCT_LIST_FAIL, //action
} from '../constants/productConstants';

// action creator function (before we did it with useEffect in Homestreen.js to fetch the list products) - it will be fired off in the Home screen
export const listProducts = () => async dispatch => {
  try {
    dispatch({ type: PRODUCT_LIST_REQUEST });

    const { data } = await axios.get('/api/products');

    dispatch({
      type: PRODUCT_LIST_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
