import {Sequelize} from "sequelize";
import db from "../config/Database.js";
import User from "./UserModel.js";

const {DataTypes} = Sequelize;

const Note = db.define('notes', 
    {
        title: DataTypes.STRING,
        content: DataTypes.TEXT,
    }, 
    {
        timestamps: true
    }
);

export default Note;

(async () => 
{
    await db.sync();
})();