// const fs = require("fs");
const Koa = require("koa");
const path = require("path");
const koaStatic = require("koa-static");
const registerRouter = require("./routes");
const app = new Koa();

const resolve = file => path.resolve(__dirname, file);
// 开放dist目录
app.use(koaStatic(resolve("../dist")));
app.use(registerRouter());
const port = 3000;
app.listen(port, function() {
  console.log(`server started at localhost:${port}`);
});
