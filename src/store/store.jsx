import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/userSlice";

import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import profileReducer from "../features/profile/profileSlice";

//
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  auth: userReducer,
  profile: profileReducer,
  
});
const persistedReducer = persistReducer(persistConfig, reducer);
export default configureStore({
  reducer: persistedReducer,
});
