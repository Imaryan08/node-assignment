const app = require("./index");
const dbConnection = require("./src/configs/db");
const port = 3000;

app.listen(port, async () => {
  try {
    await dbConnection();
    console.log(`server listening on ${port}`);
  } catch (err) {
    console.log(`error: ${err}`);
  }
});
