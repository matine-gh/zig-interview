import {FeedsInterface} from "@/store/Feeds/interface";


export const GET_FEEDS_LOADING = 'GET_FEEDS_LOADING';
export const GET_FEEDS_SUCCESS = 'GET_FEEDS_SUCCESS';
export const GET_FEEDS_FAILURE = 'GET_FEEDS_FAILURE';

export const getFeedsLoading = () => ({
  type: GET_FEEDS_LOADING,
})
export const getFeedsSuccess = (response: FeedsInterface) => ({
  type: GET_FEEDS_SUCCESS,
  response: response
})
export const getFeedsFailure = () => ({
  type: GET_FEEDS_FAILURE,
})