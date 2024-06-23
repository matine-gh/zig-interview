import { combineReducers } from '@reduxjs/toolkit';
import getFeedsReducer from "@/store/Feeds/reducer";
const rootReducer = combineReducers({

    feeds: getFeedsReducer
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
