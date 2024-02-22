import http from 'http'; 
import app from '../app.js';
import envConfig from '../env.js';

const server = http.createServer(app);

server.listen(envConfig.PORT,()=>{
    console.log('server started');
});

