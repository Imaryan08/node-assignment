const app = require("./index");
const dbConnection = require("./configs/db");

app.listen(8080, async () => {
  try {
    await dbConnection();
    console.log(`server running on port 8080`);
  } catch (error) {
    console.log(`error: ${error.message}`);
  }
});
