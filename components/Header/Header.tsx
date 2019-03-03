import * as React from "react";
import {Button, Image, Text, View} from "react-native";
import {style} from "./shHeader";


export const Header = props => {
  return (
      <View style={style.header}>
          <Text style={style.text}>{props.text}</Text>
      </View>
  )
};