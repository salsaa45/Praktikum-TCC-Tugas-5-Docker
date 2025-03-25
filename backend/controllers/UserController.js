import User from "..models/USerModel.js";

export const getUsers = async(req,res) => 
{
    try
    {
        const response = await User.findAll();
        res.status(200).json(response);
    } 
    catch (error) 
    {
        console.log(error.message);
    }
};


export const getUserById = async(req,res) => 
{
    try
    {
        const user = await User.findByPk
        (
            req.params.id,
            {
                atributes: ["id", "name", "email"]
            }
        );
        if (!user) return res.status(404).json({message: "User not found"});
        res.json(user);
    } 
    catch (error) 
    {
        res.status(500).json({message: error.message});
    }
};


export const createUsers = async(req,res) => 
{
    try
    {
        const { name, email } = req.body;
        res.json({message: "User created"});
    } 
    catch (error) 
    {
        res.status(500).json({message: error.message});
    }
};


export const deleteUsers = async(req,res) => 
{
    try
    {
        const user = await User.findByPk(req.params.id);
        if (!user) return res.status(404).json({message: "User not found"});
        await user.destroy();
        res.json({message: "User Deleted"});
    } 
    catch (error) 
    {
        res.status(500).json({message: error.message});
    }
};