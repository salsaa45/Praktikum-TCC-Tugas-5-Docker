import {Sequelize} from "sequelize";

const db = new Sequelize('db_tbl', 'root', '', 
    {
    host: '35.202.139.49',
    dialect: 'mysql'
    }
);

export default db;