import path from "path";
import jsonServer from "json-server";
import db from "./db/index.js";

const __dirname = path.resolve();
const server = jsonServer.create();
const router = jsonServer.router(db.request);
const productionPath = path.join(__dirname, "public");
const developmentPath = path.join(__dirname);

const publicPath =
  process.env.VITE_APP_NODE_ENV === "production"
    ? productionPath
    : developmentPath;

const middlewares = jsonServer.defaults({
  static: publicPath,
});

const PORT = process.env.PORT || 9000;
const API_PATH = "/api";

server.use(middlewares);
server.use(API_PATH, router);

server.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

router.render = (req, res) => {
  const pathname = req._parsedUrl.pathname.slice(1);
  const result = res.locals.data;
  let response = db.response[pathname];

  if (/^products\/\d+$/.test(pathname)) {
    response = db.response["product"](result);
  } else if (/^catalog|search$/.test(pathname)) {
    response = db.response[pathname](result);
  }

  if (response) {
    res.jsonp(response);
  } else {
    res.status(404).send({
      message: "Not found",
    });
  }
};

server.listen(PORT, () => {
  if (process.env.VITE_APP_NODE_ENV === "production") {
    console.log(
      `App running at \x1b[36m${process.env.VITE_APP_SERVER_URL}\x1b[0m`
    );
  } else {
    console.log(`Server running on port ${PORT}`);
  }
});
