import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Expo icons
import { MaterialIcons } from "@expo/vector-icons";

// Components
import WorkoutCard from "../components/molecules/workout-card";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        width: "100%",
        height: "30%",
        justifyContent: "center",
        alignItems: "center",
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        overflow: "hidden"
      }}>
        <Image source={require("../assets/workout_image.png")}
          style={{
            flex: 1,
            width: "100%",
            resizeMode: "cover",
            opacity: 0.8
          }}
        />

        <Text style={{
          position: "absolute",
          margin: "auto",
          fontSize: 24,
          fontWeight: "bold",
          color: "white"
        }}>
          FITNESS QUOTE
        </Text>
      </View>

      <View style={{ flexDirection: "row", paddingLeft: 10, marginTop: 10, alignItems: "center" }}>
        <MaterialIcons name="fitness-center" size={20} color="black" />
        <Text style={{ marginLeft: 15, fontSize: 16 }}>
          Previous workouts
        </Text>
      </View>

      <ScrollView style={{ flex: 1, marginTop: 5 }}>
        <WorkoutCard workoutCategory={"Legs"} date={"21.01.2021"} image={require("../assets/legs.jpeg")} stars={4}/>
        <WorkoutCard workoutCategory={"Back - Biceps"} date={"20.01.2021"} image={require("../assets/Back-1.jpeg")} stars={3}/>
        <WorkoutCard workoutCategory={"Chest - Triceps"} date={"19.01.2021"} image={require("../assets/chest.jpeg")} stars={5}/>
        <WorkoutCard workoutCategory={"Biceps"} date={"18.01.2021"} image={require("../assets/biceps.jpeg")} stars={4}/>
        <WorkoutCard workoutCategory={"Abs"} date={"17.01.2021"} image={require("../assets/abs.jpeg")} stars={2}/>
        <WorkoutCard workoutCategory={"Legs"} date={"16.01.2021"} image={require("../assets/legs.jpeg")} stars={4}/>

      </ScrollView>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default Home;
