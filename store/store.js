import { configureStore } from "@reduxjs/toolkit";
import { trendingNewsApi } from "../services/trendingNewsApi";

export default configureStore({
  reducer: {
    [trendingNewsApi.reducerPath]: trendingNewsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(trendingNewsApi.middleware),
});
