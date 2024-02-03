const express = require("express");
const cors = require("cors");
const PORT = 3000;
const userRoutes = require("./routes/users.routes");
const postRoutes = require("./routes/posts.routes");

const app = express();
app.use(cors());

app.use(express.json());

app.use("/users", userRoutes);
app.use("/posts", postRoutes);

app.listen(PORT, () => {
   console.log(`Server is running on ${PORT} 🚀`);
});
