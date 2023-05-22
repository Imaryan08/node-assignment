const app = require("./index");
const port = process.argv[2] || 8080;

const server = app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

server.on("error", (error) => {
  console.error(`Server error: ${error.message}`);
});
