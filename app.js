var fs = require("fs");
// fs.mkdirSync("test");
fs.mkdir("test",function () {
  fs.rmdirSync("test");
});
