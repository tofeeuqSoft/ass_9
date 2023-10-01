const app = require("./app");
const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

const PORT = process.env.RUNNING_PORT || 8089;

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});
