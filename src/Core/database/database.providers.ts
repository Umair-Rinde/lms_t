import {Sequelize} from 'sequelize-typescript'
import databaseConfig from 'src/Core/database/database.config'
export const databaseProviders={
    provider:'SEQUELIZE',
    usefactory:async ()=>{
        const sequelize = new Sequelize(databaseConfig);
        await sequelize.sync({alter:false})
        return sequelize
    }
}