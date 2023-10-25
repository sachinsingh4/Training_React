import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; //Importing localStorage
import createCounter from "./CounterSlice";
import FizzSlice from "./FizzSlice";
import userStore from "./UserSlice";

const persistConfig = {
  key: "root",
  storage,
};

const rootreducer = combineReducers({
  counter: createCounter,
  data: FizzSlice,
  user: userStore,
});

const persistreducer = persistReducer(persistConfig, rootreducer);
export const store = configureStore({
  reducer: persistreducer,
});

export const persistor = persistStore(store);
