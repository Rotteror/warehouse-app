const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

start();
// Connect to database
async function start() {
  const app = express();
  app.use(cors());
  await connectDB();

  app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );

  app.listen(port, console.log(`Server running on port ${port}`));
}
