import express from "express";
import {
  newUser,
  registerUser,
  loginUser,
  removeCredits,
  getUser
  ,
  getSlide
} from "../controllers/user.js";
import { adminOnly } from "../middlewares/auth.js";


const app = express.Router();

app.post("/new", newUser);
app.post("/register", registerUser);
app.post("/login", loginUser);
app.post("/remove", adminOnly,removeCredits);
app.get("/get", getUser);
app.post("/slide", getSlide);



export default app;
