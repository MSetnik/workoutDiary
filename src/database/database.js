// Database
import * as SQLite from "expo-sqlite";

// Async Storage
import AsyncStorage from "@react-native-async-storage/async-storage";
import { StackRouter } from "@react-navigation/native";

export const CreateDatabase = async () => {
  const db = SQLite.openDatabase("workoutDiary");

  // Provjera je li pomocna varijabla postavljena u async storage
  const dbInitialized = await AsyncStorage.getItem("@databaseInitialised");

  // TODO: PRERADITI U ASYNCSTORAGE (Prilikom prvog pokretanja se sprema token)
  // Provjera samo jedne tablice je li puna, ako je jedna puna onda su i ostale
  // if (dbInitialized !== null) {
  //   console.log("Baza vec kreirana sa pocetnim podatcima");
  //   return db;
  // }

  // Postavljanje pomocne varijable u async storage
  await AsyncStorage.setItem("@databaseInitialised", "1");

  // await InitData(db);

  const data = await GetData(db);

  return data;

  // db.transaction((tx) => {
  //   tx.executeSql(
  //     "DROP TABLE Category",
  //     [""],
  //     (tx, s) => {
  //       console.log(s.rows);
  //     },
  //     (tx, e) => {
  //       console.log(e);
  //     }
  //   );

  //   tx.executeSql(
  //     "DROP TABLE Exercise",
  //     [""],
  //     (tx, s) => {
  //       console.log(s.rows);
  //     },
  //     (tx, e) => {
  //       console.log(e);
  //     }
  //   );

  //   tx.executeSql(
  //     "DROP TABLE Sets",
  //     [""],
  //     (tx, s) => {
  //       console.log(s.rows);
  //     },
  //     (tx, e) => {
  //       console.log(e);
  //     }
  //   );

  //   tx.executeSql(
  //     "DROP TABLE Workout",
  //     [""],
  //     (tx, s) => {
  //       console.log(s.rows);
  //     },
  //     (tx, e) => {
  //       console.log(e);
  //     }
  //   );
  // });

  // await AddInitCategories(db);
  // await AddInitExercises(db);
  // CreateSetsTable(db);
  // CreateWorkoutTable(db);

  // db.transaction((tx) => {
  //   tx.executeSql(
  //     "DROP TABLE Category",
  //     [""],
  //     (tx, s) => {
  //       console.log(s.rows);
  //     },
  //     (tx, e) => {
  //       console.log(e);
  //     }
  //   );

  //   tx.executeSql(
  //     "DROP TABLE Exercise",
  //     [""],
  //     (tx, s) => {
  //       console.log(s.rows);
  //     },
  //     (tx, e) => {
  //       console.log(e);
  //     }
  //   );
  // tx.executeSql(
  //   "CREATE TABLE Category (ID INTEGER PRIMARY KEY AUTOINCREMENT, Name TEXT);"
  // );
  // tx.executeSql(
  //   // "INSERT INTO Category (Name) VALUES (Back), (Chest), (Legs), (Abs), (Shoulders), (Biceps), (Triceps)"
  //   "INSERT INTO Category (Name) VALUES (?)",
  //   ["Back"]
  //   // "DROP TABLE Category;"
  // );

  // tx.executeSql(
  //   "SELECT * FROM Exercise",
  //   // "DROP TABLE Category",
  //   [""],
  //   (tx, s) => {
  //     console.log(s.rows);
  //   },
  //   (tx, e) => {
  //     console.log(e);
  //   }
  // );

  // tx.executeSql(
  //   "SELECT * FROM Category",
  //   // "DROP TABLE Category",
  //   [""],
  //   (tx, s) => {
  //     console.log(s.rows);
  //   },
  //   (tx, e) => {
  //     console.log(e);
  //   }
  // );
  // });

  // return db;
};

const InitData = (db) => {
  return new Promise((resolve) => {
    // resolve(AddInitCategories(db), AddInitExercises(db));
    AddInitCategories(db)
      .then(AddInitExercises(db))
      .then(CreateSetsTable(db))
      .then(CreateWorkoutTable(db));
    // .then(() => {
    //   db.transaction((tx) => {
    //     tx.executeSql(
    //       "SELECT * FROM Category",
    //       // "DROP TABLE Category",
    //       [""],
    //       (tx, s) => {
    //         // console.log(s);
    //         resolve(s.rows._array);
    //       },
    //       (tx, e) => {
    //         console.log(e);
    //       }
    //     );

    //     tx.executeSql(
    //       "SELECT * FROM Exercise",
    //       // "DROP TABLE Category",
    //       [""],
    //       (tx, s) => {
    //         // console.log(s);
    //         resolve(s.rows._array);
    //       },
    //       (tx, e) => {
    //         console.log(e);
    //       }
    //     );

    //     tx.executeSql(
    //       "SELECT * FROM Sets",
    //       // "DROP TABLE Category",
    //       [""],
    //       (tx, s) => {
    //         // console.log(s);
    //         resolve(s.rows._array);
    //       },
    //       (tx, e) => {
    //         console.log(e);
    //       }
    //     );

    //     tx.executeSql(
    //       "SELECT * FROM Workout",
    //       // "DROP TABLE Category",
    //       [""],
    //       (tx, s) => {
    //         // console.log(s);
    //         resolve(s.rows._array);
    //       },
    //       (tx, e) => {
    //         console.log(e);
    //       }
    //     );
    //   });
    // });
  });
};

const GetData = async (db) => {
  const getCategoryPromise = new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Category",
        // "DROP TABLE Category",
        [""],
        (tx, s) => {
          // console.log(s);
          resolve(s.rows._array);
        },
        (tx, e) => {
          console.log(e);
        }
      );
    });
  });

  const getExercisePromise = new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Exercise",
        // "DROP TABLE Category",
        [""],
        (tx, s) => {
          // console.log(s);
          resolve(s.rows._array);
        },
        (tx, e) => {
          console.log(e);
        }
      );
    });
  });

  const getSetsPromise = new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Sets",
        // "DROP TABLE Category",
        [""],
        (tx, s) => {
          // console.log(s);
          resolve(s.rows._array);
        },
        (tx, e) => {
          console.log(e);
        }
      );
    });
  });

  const getWorkoutPromise = new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        "SELECT * FROM Workout",
        // "DROP TABLE Category",
        [""],
        (tx, s) => {
          // console.log(s);
          resolve(s.rows._array);
        },
        (tx, e) => {
          console.log(e);
        }
      );
    });
  });
  const category = await getCategoryPromise.then((s) => { return s; });
  const exercise = await getExercisePromise.then((s) => { return s; });
  const sets = await getSetsPromise.then((s) => { return s; });
  const workout = await getWorkoutPromise.then((s) => { return s; });

  const data = {
    category: category,
    exercise: exercise,
    sets: sets,
    workout: workout
  };
  return data;
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

const AddInitCategories = (db) => {
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
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE Exercise (ID INTEGER PRIMARY KEY AUTOINCREMENT, Category_id INTEGER, Name TEXT);"
      );

      tx.executeSql(
      // "INSERT INTO Category (Name) VALUES (Back), (Chest), (Legs), (Abs), (Shoulders), (Biceps), (Triceps);",
        "INSERT INTO Exercise (Category_id, Name) VALUES (?,?),(?,?),(?,?),(?,?),(?,?),(?,?),(?,?);",
        ["1", "Pulldown", "1", "Barbell row", "1", "Dumbell row", "2", "Benchpress", "2", "Dumbell benchpress", "2", "Incline dumbell press", "3", "Squat"],
        (tx, s) => {
          console.log(s);
          resolve(s.rows);
        },
        (tx, e) => {
          console.log(e);
        }
      );
    }, (e) => {
      console.log(e);
    });
  });
};

const CreateSetsTable = (db) => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE Sets (ID INTEGER PRIMARY KEY AUTOINCREMENT, Exercise_id INTEGER, Date TEXT, Review INTEGER);",
        [""],
        (tx, s) => {
          console.log(s);
          resolve(s.rows);
        },
        (tx, e) => {
          console.log(e);
        }
      );

      tx.executeSql(
        "INSERT INTO Sets (Exercise_id, Date, Review) VALUES (?,?,?) , (?,?,?);",
        ["4", "20.01.2021", "2", "2", "20.01.2021", "2"],
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
};

const CreateWorkoutTable = (db) => {
  return new Promise((resolve) => {
    db.transaction((tx) => {
      tx.executeSql(
        "CREATE TABLE Workout (ID INTEGER PRIMARY KEY AUTOINCREMENT, Category_id INTEGER, Exercise_id INTEGER, Date TEXT, Stars INTEGER);",
        [""],
        (tx, s) => {
          console.log(s);
          resolve(s.rows);
        },
        (tx, e) => {
          console.log(e);
        }
      );

      tx.executeSql(
        "INSERT INTO Workout (Category_id, Exercise_id, Date, Stars) VALUES (?,?,?,?) , (?,?,?,?);",
        ["1", "2", "20.01.2021", "3", "2", "4", "20.01.2021", "2"],
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
};
