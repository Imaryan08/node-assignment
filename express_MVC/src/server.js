const app = require("./index");
const connect = require("./configs/db");

app.listen(8080, async () => {
  await connect();
  console.log("server running on port 8080");
});
