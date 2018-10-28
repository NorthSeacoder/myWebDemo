const fs = require("fs");
const path = require("path");
const resolve = file => path.resolve(__dirname, file);
const Router = require("koa-router");

const router = new Router();

// 第 2 步：获得一个createBundleRenderer
const { createBundleRenderer } = require("vue-server-renderer");
const clientManifest = require("../../dist/vue-ssr-client-manifest.json");
const bundle = require("../../dist/vue-ssr-server-bundle.json");

const renderer = createBundleRenderer(bundle, {
  runInNewContext: false,
  template: fs.readFileSync(
    resolve("../../src/template/index.temp.html"),
    "utf-8"
  ),
  clientManifest: clientManifest
});

function renderToString(context) {
  return new Promise((resolve, reject) => {
    renderer.renderToString(context, (err, html) => {
      console.log("renderToString", err, context);
      err ? reject(err) : resolve(html);
    });
  });
}
// router.prefix("/ssr");
router.get("/", async ctx => {
  const context = {
    title: "ssr test",
    url: ctx.url
  };
  //console.log(ctx);
  // 将 context 数据渲染为 HTML
  const html = await renderToString(context);
  ctx.body = html;
});
module.exports = router;
