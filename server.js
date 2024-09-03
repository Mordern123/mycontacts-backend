const express = require("express");
const dotenv = require("dotenv").config();
const errorHandler = require("./middleware/errorHandler");

const app = express();

const port = process.env.PORT || 5001;

app.use(express.json());
app.use("/api/contacts", require("./routes/contactsRoute"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})