import React from "react";
import { ImageBackground, View, Text } from "react-native";

// Expo icons
import { AntDesign } from "@expo/vector-icons";

// Components
import Stars from "./stars-view";

const WorkoutCard = ({ workoutCategory = "Back", date = "20.01.2021.", image, stars = 3 }) => {
  return (
    <View style={{
      borderRadius: 20,
      flexDirection: "row",
      height: 200,
      overflow: "hidden",
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10
    }}>
      <ImageBackground source={image} style={{
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
        opacity: 0.7
      }}>

        <View style={{ width: "100%", height: "100%", alignItems: "center", justifyContent: "space-around" }}>
          <Text style={{ fontSize: 20, color: "white", fontWeight: "bold" }}>
            {workoutCategory}
          </Text>

          <View style={{ flexDirection: "row", width: "100%", justifyContent: "space-around" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <AntDesign name="calendar" size={24} color="white" style={{ marginRight: 10 }}/>
              <Text style={{ fontSize: 16, color: "white", fontWeight: "bold" }}>
                {date}
              </Text>
            </View>

            <Stars stars={stars}></Stars>
          </View>
        </View>

      </ImageBackground>
    </View>
  );
};

export default WorkoutCard;
