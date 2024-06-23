import {all} from 'redux-saga/effects';
import getFeedsSaga from "@/store/Feeds/saga";

function* rootSaga() {
    yield all([
        getFeedsSaga()
    ]);
}

export default rootSaga;