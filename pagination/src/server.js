const app = require("./index");
const dbConnection = require("./configs/db");

app.listen(8080, async () => {
  await dbConnection();
  console.log("server running on port 8080");
});
