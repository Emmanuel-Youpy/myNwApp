import { View, Text, Image } from "react-native";
import React from "react";
import { Divider } from "@rneui/themed";
import tw from "twrnc";

const CardFlat = ({ image, name, title, time }) => {
  return (
    <View
      style={{
        width: 410,
        alignContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "lightgray",
        paddingTop: 20,
        paddingLeft: 5,
        paddingBottom: 20,
        borderRadius: 10,
      }}
    >
      <View style={{ display: "flex", flexDirection: "row" }}>
        <View style={{ width: 265 }}>
          <Text style={{}}>{name}</Text>
          <Text style={{}}>{title}</Text>
          <Text style={{}}>{time}</Text>
        </View>
        <Image
          source={{ uri: image }}
          style={{ width: 120, height: 120, borderRadius: 10 }}
        />
      </View>
      <Divider />
      <Text>YEs</Text>
    </View>
  );
};

export default CardFlat;
