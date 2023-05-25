const app = require("./index");
const dbConnnection = require("./configs/db");

app.listen(8080, async() => {
  try {
    await dbConnnection();
    console.log(`server running on port 8080`);
  } catch (error) {
    console.log(error.message);
  }
});
