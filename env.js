import dotenv from 'dotenv';

dotenv.config();

export default {

    DATABASE_URL : process.env.DATABASE_URL ,
    PORT : process.env.PORT ,
    DATABASE_PORT : process.env.DATABASE_PORT , 
    DATABASE_PASSWORD : process.env.DATABASE_PASSWORD , 
    DATABASE_HOST : process.env.DATABASE_HOST , 
    DATABASE_NAME : process.env.DATABASE_NAME , 
    DATABASE_USER : process.env.DATABASE_USER

}