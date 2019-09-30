const express = require("express");
const connectDB = require("./config/db");
const app = express();
connectDB();
//Init Middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("API runnig"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/post", require("./routes/post"));
app.use("/api/users", require("./routes/users"));
app.use("/api/profile", require("./routes/profile"));
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
