import express from "express";

const app = express();

app.get("/users", (request, response) => {
    console.log("Listagem de usuários");
    response.json(["Adelmo", "Diego", "Rodrigo", "André", "Maurício"]);
});

app.listen(3333);