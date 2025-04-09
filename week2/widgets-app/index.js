const server = require("./server");
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

mongoose.connect('mongodb://localhost/jscript-330').then(() => {
  server.listen(port, () => {
   console.log(`Server is listening on http://localhost:${port}`);
  });
});