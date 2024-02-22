-- migrate:up

CREATE TYPE STATUS AS ENUM('PENDING','QUEUE','SENT');

CREATE TABLE IF NOT EXISTS mails
(
    id SERIAL PRIMARY KEY , 
    email TEXT NOT NULL , 
    content TEXT NOT NULL , 
    status STATUS NOT NULL DEFAULT 'PENDING' ,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ,
    updatedAt TIMESTAMP DEFAULT NULL 
);

-- migrate:down

DROP TABLE IF EXISTS mails ; 

DROP TYPE IF EXISTS STATUS ; 