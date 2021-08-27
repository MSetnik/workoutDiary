import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

// Navigation
import { NavigationContainer } from "@react-navigation/native";

// Stacks
import HomeStack from "./src/routes/home";

// Database
import * as SQLite from "expo-sqlite";
import { CreateDatabase } from "./src/database/database";

export default function App () {
  const getData = () => {
    const db = CreateDatabase();

    // const res = db.transaction((tx) => {
    //   tx.executeSql(
    //     "SELECT * FROM Category",
    //     [""],
    //     (tx, result) => {
    //       console.log(result.rows);
    //     }
    //   );
    // });

    // return res;
  };

  useEffect(() => {
    getData();
  }, []);

  // db.transaction((tx) => {
  //   tx.executeSql(
  //     "SELECT * FROM Category",
  //     [""],
  //     (tx, result) => {
  //       console.log(result.rows);
  //     }
  //   );
  // });

  return (
    <NavigationContainer>
      <HomeStack/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
