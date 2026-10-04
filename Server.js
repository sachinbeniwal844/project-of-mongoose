import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";

import userRoutes from "./Routes/user.js";
import todoRoutes from "./Routes/todo.js";

const app = express();

// .env setup
config({path:".env"})

//Destructuring
app.use(express.json());

// user signup router
app.use("/api/user", userRoutes);

//todo creation
app.use('/api/todo',todoRoutes)

app.get("/", (req, res) =>
  res.json({ message: "This is the home route working......" }),
);

mongoose
  .connect(
    process.env.MONGO_URI,
    {
      dbName: "sachin",
    },
  )
  .then(() => console.log("mongoose is connected.........."))
  .catch((error) => console.log(error.message));

const port = process.env.PORT || 3001;
app.listen(port, "0.0.0.0",() => console.log(`Server is running on the port of ${port}`));
