const express = require("express");
const notes = require("./data/notes");
const dotenv = require("dotenv");
const morgan = require('morgan')
const connectDB = require("./config/db")
const userRoutes = require("./routes/userRoutes")
const {notFound , errorHandler}= require("./middlewares/errorMiddleware")

const app = express();
dotenv.config();
app.use(morgan("common"))
connectDB()
app.use(express.json())


app.get("/api/notes", (req, res) => {
  res.json(notes);
});

// routes
app.use("/api/users" , userRoutes)

app.use(notFound)
app.use(errorHandler)


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log(`server started on PORT ${PORT}`));
