import { View, Text, Image } from "react-native";
import React from "react";
import tw from "twrnc";

const Card = ({ image, name, title, time }) => {
  return (
    <View style={tw`pt-5`}>
      <Image source={{ uri: image }} style={{ width: "100%", height: 250 }} />
      <View style={{}}>
        <Text style={{}}>{name}</Text>
        <Text style={{}}>{title}</Text>
        <Text style={{}}>{time}</Text>
      </View>
    </View>
  );
};

export default Card;
