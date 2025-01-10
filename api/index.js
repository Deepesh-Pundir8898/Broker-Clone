import express from "express";
import postRoute from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";

const app = express();

app.use(express.json());

app.use("/api/auth",authRouter)
app.use("/api/posts",postRoute)
const port = 3000;
app.listen(port ,()=>{console.log("Server is runnig at port:",port)})