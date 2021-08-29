import React from "react";
import { Platform, View } from "react-native";

// Expo icons
import { AntDesign } from "@expo/vector-icons";

const Stars = ({ stars }) => {
  const emptyStars = 5 - stars;

  const renderStars = () => {
    const fullStarsView = [];
    const emptyStarsView = [];
    for (let i = 0; i < stars; i++) {
      fullStarsView.push(<AntDesign name="star" size={16} color="yellow" />);
    }

    for (let i = 0; i < emptyStars; i++) {
      emptyStarsView.push(<AntDesign name="staro" size={16} color="black" />);
    }

    return (
      <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
        {
          fullStarsView.map((f) => {
            return f;
          })
        }

        {
          emptyStarsView.map((e) => { return e; })
        }
      </View>

    );
  };

  return renderStars();
};

export default Stars;
