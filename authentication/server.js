const app = require("./app");
const dbConnection = require("./src/configs/db");

app.listen(8080, async () => {
  await dbConnection();
  console.log("server running on port 8080");
});
