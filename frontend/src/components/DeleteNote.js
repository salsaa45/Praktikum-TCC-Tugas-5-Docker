import React, {useEffect} from "react";
import axios from "axios";
import {useNavigate, useParams} from "react-router-dom";
import { BASE_URL } from "../Utils.js"; 

const DeleteNote = () => 
{
    const navigate = useNavigate();
    const {id} = useParams();

    useEffect(() => 
    {
        const deleteNote = async () => 
        {
            try 
            {
                await axios.delete(`${BASE_URL}/notes/${id}`);
                navigate("/"); 
            } catch (error) 
            {
                console.error("Error deleting note:", error);
            }
        };
        deleteNote();
    }, [id, navigate]);

    return (
        <div className="container">
            <h2 className="title">Deleting Note...</h2>
        </div>
    );
};

export default DeleteNote;