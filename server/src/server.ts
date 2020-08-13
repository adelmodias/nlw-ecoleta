import express, { response } from "express";

const app = express();

// Para o Express conseguir ler e entender uma request body no formato JSON.
app.use(express.json());

const users = ["Adelmo", "Diego", "Rodrigo", "André", "Maurício"];

app.get("/users", (request, response) => {
    const search = String(request.query.search);

    const filteredUsers = search
        ? users.filter((user) => user.includes(search))
        : users;

    response.json(filteredUsers);
});

app.get("/users/:id", (request, response) => {
    const id = Number(request.params.id);
    response.json(users[id]);
});

app.post("/users", (request, response) => {
    const data = request.body;

    const user = {
        name: data.name,
        email: data.email,
    };

    return response.json(user);
});

app.listen(3333);
