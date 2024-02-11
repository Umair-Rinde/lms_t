import {SequelizeOptions} from 'sequelize-typescript';
import * as dotnev from 'dotenv'
dotnev.config();
const databaseConfig: SequelizeOptions ={
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME_DEVELOPMENT,
    host: process.env.DB_HOST,
    port: 3333,
    dialect: 'postgres',
    logging:true,
    sync:{alter:false}
};

export default databaseConfig;