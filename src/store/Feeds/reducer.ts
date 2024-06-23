import { HYDRATE } from 'next-redux-wrapper';
import {GET_FEEDS_FAILURE, GET_FEEDS_LOADING, GET_FEEDS_SUCCESS} from "@/store/Feeds/action";


const initialState = {
  isDone: false,
  isLoading: false,
  response: {},
  hasError: false,
};

export default function getFeedsReducer(state: any, action: any) {
  if (state == undefined) {
    return initialState;
  }
  switch (action.type) {
    case HYDRATE:
      return {
        ...state,
        ...action.payload,
      }
    case GET_FEEDS_LOADING:
      return {
        ...state,
        isLoading: true,
        isDone: false,
        hasError: false,
      }
    case GET_FEEDS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isDone: true,
        hasError: false,
        response: action.response
      }
    case GET_FEEDS_FAILURE:
      return {
        ...state,
        isLoading: false,
        isDone: false,
        hasError: true,
      }
    default:
      return state
  }
}