// Database
import * as SQLite from "expo-sqlite";

export const CreateDatabase = async () => {
  const db = SQLite.openDatabase("workoutDiary");

  // TODO: PRERADITI U ASYNCSTORAGE (Prilikom prvog pokretanja se sprema token)
  // Provjera samo jedne tablice je li puna, ako je jedna puna onda su i ostale
  if (await CheckCategoryLength(db) !== 0) {
    console.log("da");
    return db;
  }

  // await AddInitCategories(db);
  // AddInitExercises(db);
  // CreateSetsTable(db);
  // CreateWorkoutTable(db);

  // db.transaction((tx) => {
  //   tx.executeSql(
  //     "CREATE TABLE Category (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT);"
  //   );
  //   tx.executeSql(
  //     // "INSERT INTO Category (Name) VALUES (Back), (Chest), (Legs), (Abs), (Shoulders), (Biceps), (Triceps)"
  //     "INSERT INTO Category (Name) VALUES (?)",
  //     ["Back"]
  //     // "DROP TABLE Category;"
  //   );
  // }, (s) => {
  //   console.log(s);
  // }, (e) => {
  //   console.log(e);
  // });

  // return db;
};

const CheckCategoryLength = async (db) => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Category",
        // "DROP TABLE Category",
        [""],
        (tx, s) => {
          resolve(s.rows._array.length);
        },
        (tx, e) => {
          console.log(e);
        }
      );
    });
  });
};

const AddInitCategories = async (db) => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE Category (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT)",
        [""],
        (tx, s) => {
          console.log(s.rows);
        },
        (tx, e) => {
          console.log(e);
        }
      );
      tx.executeSql(
      // "INSERT INTO Category (Name) VALUES (Back), (Chest), (Legs), (Abs), (Shoulders), (Biceps), (Triceps);",
        "INSERT INTO Category (Name) VALUES (?),(?),(?),(?),(?),(?),(?);",
        ["Back", "Chest", "Legs", " Abs", "Shoulders", "Biceps", "Triceps"],
        (tx, s) => {
          console.log(s);
          resolve(s.rows);
        },
        (tx, e) => {
          console.log(e);
        }
      );
    });
  });
  // await db.transaction((tx) => {
  //   // tx.executeSql(
  //   //   "CREATE TABLE Category (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT)",
  //   //   [""],
  //   //   (tx, s) => {
  //   //     console.log(s.rows);
  //   //   },
  //   //   (tx, e) => {
  //   //     console.log(e);
  //   //   }
  //   // );
  //   tx.executeSql(
  //     // "INSERT INTO Category (Name) VALUES (Back), (Chest), (Legs), (Abs), (Shoulders), (Biceps), (Triceps);",
  //     "INSERT INTO Category (Name) VALUES (?),(?),(?),(?),(?),(?),(?)",
  //     ["Back, Chest, Legs, Abs, Shoulders, Biceps, Triceps"],
  //     (tx, s) => {
  //       console.log(s);
  //     },
  //     (tx, e) => {
  //       console.log(e);
  //     }
  //   );
  // });

  // db.transaction((tx) => {
  //   tx.executeSql(
  //     "INSERT INTO Category (Name) VALUES (Back), (Chest), (Legs), (Abs), (Shoulders), (Biceps), (Triceps)"
  //   );
  // });
};

const AddInitExercises = (db) => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE Exercise (ID INTEGER PRIMARY KEY AUTOINCREMENT, Category_id INTEGER, Name TEXT);"
    );
  });

  db.transaction((tx) => {
    tx.executeSql(
      "INSERT INTO Category (Category_id, Name) VALUES (1, Pull up), (2, Bench press), (3, Squat), (4, Crunches), (5, Overhead press), (6, Dumbell curl), (7, Ez-bar pushdown);"
    );
  });
};

const CreateSetsTable = (db) => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE Sets (ID INTEGER PRIMARY KEY AUTOINCREMENT, Exercise_id INTEGER, Date TEXT, Review INTEGER);"
    );
  });
};

const CreateWorkoutTable = (db) => {
  db.transaction((tx) => {
    tx.executeSql(
      "CREATE TABLE Workout (ID INTEGER PRIMARY KEY AUTOINCREMENT, Category_id INTEGER, Exercise_id INTEGER, Date TEXT, Stars INTEGER);"
    );
  });
};
