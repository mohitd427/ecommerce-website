// import { reducer as Appreducer } from "./Appreducer/reducer";
// // import { reducer as Authreducer } from "./Auth/reducer";
// import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
// import thunks from "redux-thunk";
// // combineReducers({ Appreducer, Authreducer });
// const rootReducer = Appreducer

// const store = legacy_createStore(rootReducer, applyMiddleware(thunks));
// //console.log(store.getState());
// export { store };

import { configureStore, combineReducers } from "@reduxjs/toolkit";
import cartReducer from "./cartRedux";
import userReducer from "./userRedux";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const rootReducer = combineReducers({ user: userReducer, cart: cartReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export let persistor = persistStore(store);