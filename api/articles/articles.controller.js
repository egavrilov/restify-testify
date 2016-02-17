module.exports = (server) => {
  server.post("/articles", () => {});
  server.put("/articles/:id", () => {});
  server.del("/articles/:id", () => {});
  server.get({path: "/articles/:id", version: "1.0.0"}, () => {});
  server.get({path: "/articles/:id", version: "2.0.0"}, () => {});
}
