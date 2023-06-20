import {configureStore} from '@reduxjs/toolkit';
import authenSlice from '../features/site.features/authenSlice';
import {combineReducers} from 'redux';

import storage from 'redux-persist/lib/storage';
import {persistReducer, persistStore} from 'redux-persist';
import thunk from 'redux-thunk';

const reducers = combineReducers({
	authenSlice: authenSlice,
});

const persistConfig = {
	key: 'root',
	storage,
};
const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});

export let persistor = persistStore(store);

export default store;
