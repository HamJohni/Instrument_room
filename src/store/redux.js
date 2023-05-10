import {configureStore,combineReducers} from "@reduxjs/toolkit";
import {productsSlice} from "./reducers/products";
import {apiUsers} from "./reducers/users";
import storage from 'redux-persist/lib/storage'
import {FLUSH, PAUSE, PERSIST, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE} from "redux-persist";

const rootReducer = combineReducers({

})

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = configureStore({
    reducer: {
        persistedReducer,
        [apiUsers.reducerPath]: apiUsers.reducer,
        [productsSlice.reducerPath]: productsSlice.reducer,
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        })
            .concat(apiUsers.middleware)
            .concat(productsSlice.middleware)
})

export const persistor = persistStore(store)
export default store