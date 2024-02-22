import amqplib from 'amqplib';
import nodemailer from 'nodemailer'; 
import cron from 'node-cron';
import pool from '../config/db.js';
const availableMail = [

        {
            mail : "khalasjigar0861@gmail.com" ,
            content : `Just testing email`
        } , 
        {
            mail : "jigar.khalas@zuru.com" ,  
            content : `JUST TESTING EMAIL`
        },
        {
            mail : "tirthjain8866@gmail.com",  
            content : 'JUST TESTING EMAIL'
        },
        {
            mail : "jigarkhalas1912@gmail.com", 
            content : 'JUST TESTING EMAIL'
        }, 
        {
            mail : "naineel.soyantar@zuru.com" , 
            content : 'SMALL TESTING APP'
        },
        {
            mail : "naineelsoyantar@gmail.com" ,
            content : 'SMALL TESTING APP'
        },
        {
            mail : "khalasjigar0861@gmail.com" ,
            content : `Just testing email`
        } , 
        {
            mail : "jigar.khalas@zuru.com" , 
            content : `JUST TESTING EMAIL`
        },
        {
            mail : "naineel.soyantar@zuru.com" , 
            content : 'SMALL TESTING APP'
        },
        {
            mail : "naineelsoyantar@gmail.com" ,
            content : 'SMALL TESTING APP'
        }
    ];


const insertDB = async ()=>{

    const client = await pool.connect();

    try{

        const flatArray = availableMail.map(item => [item.mail, item.content]).flat();

        let arr = [];
    
        for(let i = 0 ; i < flatArray.length ; i+=2){

            let values = '';

            if(i==0){
                
                values =  `VALUES($${i+1}  , $${i+2} )` ; 
           
            }else{

                values =  `($${i+1}  , $${i+2} )` ;  
            
            }

           arr.push(values);

        }

        const query = `INSERT INTO mails(email,content) ${arr.join(',')}`;
        
        const result = await client.query(query,flatArray);

        console.log('Record Inserted.')


    }catch(error){

        console.log(error)

    }finally{
        await client.release();
    }
}

