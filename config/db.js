import pg from 'pg';
import envConfig from '../env.js';
const Pool = pg.Pool ;

const pool = new Pool({
    
    host : envConfig.DATABASE_HOST , 
    user : envConfig.DATABASE_USER , 
    password : envConfig.DATABASE_PASSWORD , 
    port : envConfig.DATABASE_PORT , 
	database: envConfig.DATABASE_NAME

});

export default pool ; 