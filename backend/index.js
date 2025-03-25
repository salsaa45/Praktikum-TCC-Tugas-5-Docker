import express from "express";
import cors from "cors";
import UserRoute from "./routes/UserRoute.js";
import db from "./config/Database.js";

const app = express();

(async () => 
{
    try 
    {
        await db.authenticate();
        console.log("Database Connected");
        await db.sync();
        console.log("Database Synced");
    } 
    catch (error) 
    {
        console.error("Database Connection Failed:", error);
    }
})();

app.use(cors());
app.use(express.json());
app.use(UserRoute);

app.listen(5000, () => console.log('Server up and running...'));