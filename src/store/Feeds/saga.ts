
import { call, put, takeLatest } from 'redux-saga/effects';
import axiosInterceptorInstance from "@/store/axios";
import {GET_FEEDS_LOADING, getFeedsFailure, getFeedsSuccess} from "@/store/Feeds/action";
import errorHandling from "@/store/_utils/errorHandling";

function* ApiCall(): Generator<any> {
    try {
        const response: any = yield call(axiosInterceptorInstance.get,
            '/feeds',
            {
                timeout: Number(process.env.API_TIME_OUT),
            });
        yield put(getFeedsSuccess(response.data));
    } catch (error: any) {
        yield errorHandling(error, getFeedsFailure);
    }
}

export default function* getFeedsSaga() {
    yield takeLatest(GET_FEEDS_LOADING, ApiCall);
}