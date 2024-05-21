import { configureStore } from '@reduxjs/toolkit'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import newsReducer from './slices/newsSlice'
import { newsApi } from './servicies/newsApi'

export const store = configureStore({
  reducer: {
    news: newsReducer,
      [newsApi.reducerPath]: newsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(newsApi.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector .withTypes<RootState>()