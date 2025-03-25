import Note from "../models/NoteModel.js";


export const getNotes = async(req, res) => 
{
    try 
    {
        const Notes = await Note.findAll();
        res.json(notes);
    } 
    catch (error) 
    {
        res.status(500).json({message: error.message});
    }
};


export const getNoteById = async (req, res) => 
{
    try 
    {
        const note = await Note.findByPk(req.pramas.id);
        if (!note) return res.status(404).json({message: "Note not found"});
        res.json(note);
    } 
    catch (error) 
    {
        res.status(500).json({message: error.message});
    }
};


export const createNotes = async (req, res) => 
{
    try 
    {
        await Note.create(req.body);
        res.json({message: "Note  Created"});
    } 
    catch (error) 
    {
        res.status(500).json({message: error.message});
    }
};


export const updateNotes = async (req, res) => 
{
    try 
    {
        const note = await Note.findByPk(req.pramas.id);
        if (!note) return res.status(404).json({message: "Note not found"});
        await note.update(req.body);
        res.json({message: "Note Updated"});
    } 
    catch (error) 
    {
        res.status(500).json({message: error.message});
    }
};


export const deleteNotes = async (req, res) => 
{
    try 
    {
        const note = await Note.findByPk(req.pramas.id);
        if (!note) return res.status(404).json({message: "Note not found"});
        await note.destroy();
        res.json({message: "Note Deleted"});
    } 
    catch (error) 
    {
        res.status(500).json({message: error.message});
    }
};