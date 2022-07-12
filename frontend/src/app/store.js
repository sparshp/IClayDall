import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { postApi } from '../services/Post';


export const store = configureStore({
    reducer: {
         // reducerPath and reducer are created for us, which we can pass straight into the reducer parameter of configureStore.
        [postApi.reducerPath]:postApi.reducer
    },

     // middleware is also created for us, which will allow us to take advantage of caching, invalidation, polling, and the other features of RTK Query.
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(postApi.middleware),
})
  
// It will enable to refetch the data on certain events, such as refetchOnFocus and refetchOnReconnect.
setupListeners(store.dispatch)