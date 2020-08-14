import express from "express";

import PointsController from "./controllers/pointsController";
import ItemsController from "./controllers/itemsController";

const routes = express.Router();
const pointsControler = new PointsController();
const itemsControler = new ItemsController();

routes.get("/items", itemsControler.index);

routes.post("/points", pointsControler.create);
routes.get("/points", pointsControler.index);
routes.get("/points/:id", pointsControler.show);

export default routes;
