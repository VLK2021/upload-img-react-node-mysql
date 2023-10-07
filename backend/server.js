import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import multer from 'multer';




const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'uploadImg'
})

app.listen(8081, () => {
    console.log('Server was started on PORT 8081!');
})