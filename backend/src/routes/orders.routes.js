import { Router } from "express";

import { createOrders } from "../controllers/orders.controller.js"

export const ordersRouter = Router()


ordersRouter.post("/", createOrders);

// ordersRouter.put("/:id", updateOrders);

// ordersRouter.delete("/:id", deleteOrders)