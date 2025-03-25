import express from "express";
import {getNotes,
        getNoteById,
        createNotes,
        updateNotes,
        deleteNotes} from "../controllers/NoteController";

 const router = express.Router();

 router.get("/notes", getNotes);
 router.get("/notes/:id", getNoteById);
 router.post("/notes", createNotes);
 router.put("/notes/:id", updateNotes);
 router.delete("/notes/:id", deleteNotes);

 export default router;