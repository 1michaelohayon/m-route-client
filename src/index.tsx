import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';
const store = configureStore({
    reducer: {
        user: userReducer
    }

})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

console.log('inital store state', store.getState())
store.subscribe(() => {
    const storeNow = store.getState()
    console.log('storeNow:', storeNow)
})


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);
