import { Router } from "express";

import { createOrders, getAllOrders, getOrdersDelivered, getOrdersNotDelivered } from "../controllers/orders.controller.js"


export const ordersRouter = Router()


ordersRouter.post("/", createOrders);

ordersRouter.get("/orders", getAllOrders);
ordersRouter.get("/orders/delivered", getOrdersDelivered);
ordersRouter.get("/orders/not_delivered", getOrdersNotDelivered);

// ordersRouter.delete("/:id", deleteOrders)