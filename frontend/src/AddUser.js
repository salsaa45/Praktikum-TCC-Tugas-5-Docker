import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { BASE_URL } from "../Utils.js"; 

const AddUser = () => 
{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const navigate = useNavigate();

    const saveUser = async(e) => 
    {
    e.preventDefault();
    try 
    {
        await axios.post(`${BASE_URL}/add-users`, 
        {
            name, email, title, content
        });
        } 
        catch (error) 
        {
            console.log(error);
        }
    };

  return (
    <div><div className="columns mt-5 is-centered">
        <div className="column is-half">
            <form onSubmit={saveUser}>
                <div className='field'>
                    <label className='label'>
                        Name
                    </label>
                    <div>
                        <input type='text' 
                        className='input' 
                        value = {name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Name'/>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>
                        Email
                    </label>
                    <div>
                        <input type='text' 
                        className='input' 
                        value = {email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Email'/>
                    </div>
                </div>
                <div className='field'>
                    <label className='label'>
                       Title
                    </label>
                    <div>
                        <input type='text' 
                        className='input' 
                        value = {title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder='Title'/>
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
                        rows="5">
                    </textarea>
                    </div>
                </div>
                <div className='field'>
                    <button type='submit' className='button is-success'>
                        Save
                    </button>
                </div>
            </form>
        </div>
    </div></div>
  )
};

export default AddUser;