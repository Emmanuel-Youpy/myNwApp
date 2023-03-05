import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
// import "intl";
// import "intl/locale-data/jsonp/en";
import { Divider } from "@rneui/themed";
import Card from "../components/Card";
// import "intl-polyfill/locale-data/jsonp/en.js";

import { useGetTrendingNewsQuery } from "../services/trendingNewsApi";

const HomeNews = () => {
  const demoImage = "https://source.unsplash.com/random/300x200";
  const { data: trendingNews, isFetching } = useGetTrendingNewsQuery();
  // console.log(trendingNews);

  const dataItem = trendingNews?.articles;
  console.log(dataItem);

  if (isFetching) return <Text>Loading</Text>;

  //   function CurrentDate() {
  //     const today = new Date();
  //     const options = { month: "long", day: "numeric" };
  //     const dateString = new Intl.DateTimeFormat("en-US", options).format(today);

  //     return <Text>{dateString}</Text>;
  //   }

  return (
    <ScrollView>
      <View style={tw`pt-15 pl-2 pr-2 `}>
        <View
          style={[
            tw`content-center items-center`,
            { display: "flex", flexDirection: "row" },
          ]}
        >
          <Text style={[tw`pr-1`]}>
            <Ionicons name="newspaper" size={30} color="black" />
          </Text>

          <Text style={tw`text-2xl font-bold`}>News</Text>
        </View>
        <Text style={[tw`text-2xl font-bold `, { color: "gray" }]}>
          {/* {CurrentDate()} */}
          Today
        </Text>
        <Divider />
        {trendingNews?.articles.map((news, i) => (
          <Card
            key={i}
            // image="https://images.pexels.com/photos/214574/pexels-photo-214574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            // "https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg"
            // image={news?.publisher?.url || demoImage}
            image={demoImage}
            name={news?.publisher?.name}
            title={news.title}
            time={news.published_date}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeNews;
