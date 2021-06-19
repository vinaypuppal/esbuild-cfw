import { Router } from "worktop";
import { listen } from "worktop/cache";

const API = new Router();

API.add("GET", "/greet/:name", (req, res) => {
  res.end(`Hello, ${req.params.name}!`);
});

API.add("GET", "/", (req, res) => {
  const command = `<a href="https://${req.hostname}/greet/vinay" target="_blank">link</a>`;

  res.setHeader("Cache-Control", "public,max-age=60");
  res.setHeader("Content-Type", "text/html");
  res.end(`Howdy~! Please greet yourself; Click this ${command}`);
});

listen(API.run);
