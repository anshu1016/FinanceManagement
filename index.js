const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bcrypt = require("bcrypt");
const PORT = 3000;
const initializeDatabase = require("./db.js");
const incomeRouter = require("./router/income.router.js");
const { expenseRouter } = require("./router/expense.router.js");
const savingRouter = require("./router/saving.router.js")

initializeDatabase();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());

app.use("/incomes", incomeRouter);
app.use("/expenses", expenseRouter);
app.use("/savings",savingRouter)
// Error Handler Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("Something broke!");
});

// BASIC TESTING
app.get("/test", (req, res) => {
  res.send("Test EndPoint");
});

// ROUTES
app.get("/", (req, res) => {
  res.send("Hello Express App!");
});

// PORT LISTEN
app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
});
