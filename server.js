const express = require("express");

const app = express();

app.use(express.static(`${__dirname}/public`));

const PORT = 4000;
// Notes: "const PORT = process.env.PORT" is valid many times, not now though
app.listen(PORT, () => {
  console.log(`Running on port ${PORT}`);
});
