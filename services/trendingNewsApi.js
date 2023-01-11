// import axios from "axios";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const trendingNewsHeader = {
  "X-BingApis-SDK": "true",
  "X-RapidAPI-Key": "2de72cce39msh10c7568b3a36e1cp146e21jsne8f02b9ddd74",
  "X-RapidAPI-Host": "bing-news-search1.p.rapidapi.com",
};

const createRequest = (url) => ({ url, headers: trendingNewsHeader });

export const trendingNewsApi = createApi({
  reducerPath: "trendingNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bing-news-search1.p.rapidapi.com",
  }),
  endpoints: (builder) => ({
    getTrendingNews: builder.query({
      query: ({ newsCategory, count }) =>
        createRequest(
          `/news/trendingtopics&safeSearch=Off&textFormat=Raw&count=${count}`
        ),
    }),
  }),
});

export const { useGetTrendingNewsQuery } = trendingNewsApi;
