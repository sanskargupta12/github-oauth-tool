const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
require("dotenv").config();
require("./auth"); // GitHub OAuth setup

app.use("/api", require("./routes/rerequire('dotenv').config();
const express = require("express");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
require("./auth"); // GitHub OAuth setup

const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);
app.use(passport.initialize());
app.use(passport.session());

// Register routes after initializing app
app.use("/auth", require("./routes/githubRoutes"));
app.use("/api", require("./routes/repoRoutes"));

// Default route
app.get("/", (req, res) => {
  res.send("Welcome to the GitHub OAuth App backend");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
poRoutes"));

const app = express();

// Middleware
app.use(cors({ origin: process.env.FRONTEND_URL, credentials: true }));
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 24 * 60 * 60 * 1000 },
  })
);

app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use("/auth", require("./routes/githubRoutes"));
// Existing middleware and routes setup...

// Default route for "/"
app.get("/", (req, res) => {
    res.send("Welcome to the GitHub OAuth App backend");
  });
  
  // Start server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  