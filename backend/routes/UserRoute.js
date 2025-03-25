import express from "express";
import {getUsers,
        getUserById,
        createUsers,
        deleteUsers} from "../controllers/UserController.js";

const router = express.Router();

router.get('/users', getUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUsers);
router.delete("/users/:id", deleteUsers);

export default router;