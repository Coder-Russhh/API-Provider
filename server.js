const express = require("express");
const colors = require("colors");
const cors = require("cors");
const rateLimiter = require("./middlewares/rateLimiter");
const apiRoutes = require("./routes/apiRoute");

const app = express();
const PORT = process.env.PORT || 5000;

// middlewares ----
const corsOptions = {
  origin: "*", // Allow all origins
  methods: ["GET", "POST", "PUT", "DELETE"], // Allow specific methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow headers
};

app.use(cors(corsOptions));
app.use(rateLimiter);

// api routes ----
app.use("/api/v2", apiRoutes);

app.listen(PORT, () => {
  console.log(`server is connected at ${PORT}`.bgBlue);
});
