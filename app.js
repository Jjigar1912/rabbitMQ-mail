import express from 'express'; 
import pool from './config/db.js';
import './src/emailSender.js';

const app = express();

app.use(express.json());

export default express ; 