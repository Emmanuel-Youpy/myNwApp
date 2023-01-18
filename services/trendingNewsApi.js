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
      query: () =>
        createRequest(
          // `/news/trendingtopics&safeSearch=Off&textFormat=Raw&count=${count}`
          // `/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`
          "/news?safeSearch=Off&textFormat=Raw"
        ),
    }),
  }),
});

export const { useGetTrendingNewsQuery } = trendingNewsApi;
