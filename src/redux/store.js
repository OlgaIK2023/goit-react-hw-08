import { configureStore } from "@reduxjs/toolkit";
// import { contactsReducer } from './contactsSlice';
// import { filtersReducer } from './filtersSlice';
// import { contactsReducerNew } from "./contactsSliceNew";



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


import { timerReducer } from "./timer/timerSlice";

import { authReducer } from "./auth/slice";

const authPeristConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};


// export const store = configureStore({
//   reducer: {
//     contacts:contactsReducer,
//     filters: filtersReducer,
//   },
// });

export const store = configureStore({
  reducer: {
    // mailbox: persistReducer(mailboxPeristConfig, mailboxReducer),
   
    countDownTimer: timerReducer,
    
    auth: persistReducer(authPeristConfig, authReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);