import express from "express";
import { allTodos, create, remove, update } from "../Controllers/todo.js";
import authmiddleware from "../middleware/Auth.js";

const router = express.Router();

// todo create
// @api - /api/todo/create
router.post("/create", authmiddleware, create);

// todo remove
// @api - /api/todo/remove/:id
router.delete("/remove/:id",authmiddleware,remove);

// todo update
// @api - /api/todo/update/:id
router.put("/update/:id",authmiddleware,update);

// todo allTodos
// @api - /api/todo/allTodos
router.post("/all-Todos",allTodos);

export default router;
