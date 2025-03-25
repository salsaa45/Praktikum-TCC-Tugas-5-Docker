import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';
import { BASE_URL } from "../Utils.js"; 

const EditNote = () => 
{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();
    const {id} = useParams(); 

    useEffect(() => 
    {
        const getNoteById = async () => 
        {
            try 
            {
                const response = await axios.get(`${BASE_URL}/notes/${id}`);
                setTitle(response.data.title);
                setContent(response.data.content);
            } 
            catch (error) 
            {
                console.error("Error fetching note:", error);
            }
        };
        getNoteById();
    }, [id]);

    const updateNote = async (e) => 
    {
        e.preventDefault();
        try 
        {
            await axios.put(`http://localhost:5000/notes/${id}`, 
            {
                title,
                content,
            });
            navigate("/"); 
        } 
        catch (error) 
        {
            console.log(error);
        }
    };

    return (
        <div className="columns mt-5 is-centered">
            <div className="column is-half">
                <h2 className="title">Edit Note</h2>
                <form onSubmit={updateNote}>
                    <div className='field'>
                        <label className='label'>Title</label>
                        <div>
                            <input
                                type='text'
                                className='input'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                placeholder='Title'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <label className='label'>Content</label>
                        <div>
                            <textarea
                                className='textarea'
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                                placeholder='Content'
                            />
                        </div>
                    </div>
                    <div className='field'>
                        <button type='submit' className='button is-warning'>
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditNote;