import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import "intl";
import "intl/locale-data/jsonp/en";
import { Divider } from "@rneui/themed";
import Card from "../components/Card";

const HomeNews = () => {
  function CurrentDate() {
    const today = new Date();
    const options = { month: "long", day: "numeric" };
    const dateString = new Intl.DateTimeFormat("en-US", options).format(today);

    return <Text>{dateString}</Text>;
  }

  return (
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
        {CurrentDate()}
      </Text>
      <Divider />

      <Card
        image="https://awildgeographer.files.wordpress.com/2015/02/john_muir_glacier.jpg"
        name="the name"
        title="The title"
        time="current time"
      />
    </View>
  );
};

export default HomeNews;
