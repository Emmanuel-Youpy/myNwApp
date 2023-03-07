import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
// import "intl";
// import "intl/locale-data/jsonp/en";
import { Divider } from "@rneui/themed";
import Card from "../components/Card";
import CardFlat from "../components/CardFlat";
import CardBoard from "../components/CardBoard";
// import "intl-polyfill/locale-data/jsonp/en.js";
import millify from "millify";
import { Dimensions } from "react-native";

import { useGetTrendingNewsQuery } from "../services/trendingNewsApi";

const HomeNews = () => {
  const windowWidth = Dimensions.get("window").width;
  console.log("Window width:", windowWidth);

  const demoImage = "https://source.unsplash.com/random/300x200";
  const { data: trendingNews, isFetching } = useGetTrendingNewsQuery();
  // console.log(trendingNews);

  const dataItem = trendingNews?.articles[3];
  console.log(dataItem);

  if (isFetching) return <Text>Loading</Text>;

  //   function CurrentDate() {
  //     const today = new Date();
  //     const options = { month: "long", day: "numeric" };
  //     const dateString = new Intl.DateTimeFormat("en-US", options).format(today);

  //     return <Text>{dateString}</Text>;
  //   }

  const FirstItem = () => {
    const firstItem = trendingNews?.articles[0]; // get the first item from the arra
    return (
      <View>
        <CardBoard
          image={demoImage}
          name={firstItem?.publisher?.name}
          title={firstItem?.title}
          time={firstItem?.published_date}
        />
      </View>
    );
  };
  const FlatItem = () => {
    const firstItem = trendingNews?.articles[0]; // get the first item from the arra
    return (
      <View style={{}}>
        <CardFlat
          image={demoImage}
          name={firstItem?.publisher?.name}
          title={firstItem?.title}
          time={firstItem?.published_date}
        />
      </View>
    );
  };

  const newsList = trendingNews?.articles.slice(1, 3);

  return (
    <ScrollView>
      <View
        style={{
          paddingTop: 45,
          paddingLeft: 5,
          paddingRight: 5,
          // width: windowWidth,
        }}
      >
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
        <View style={{ alignContent: "center", alignItems: "center" }}>
          <FirstItem />
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {newsList.map((news, i) => (
              <Card
                key={i}
                image={demoImage}
                name={news?.publisher?.name}
                title={news.title.split(" ").slice(0, 10).join(" ")}
                time={millify(news.published_date)}
              />
            ))}
          </View>
          <FlatItem />
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeNews;
