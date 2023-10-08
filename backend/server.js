import express from 'express';
import cors from 'cors';
import mysql from 'mysql2';
import multer from 'multer';
import path from 'path';


const app = express();
app.use(express.json());
app.use(cors());


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },

    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage
});


const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'upload_img'
})

app.post('/upload', upload.single('image'), (req, res) => {
    const image = req.file.filename;
    const sql = "UPDATE uploadimages SET image = ?";

    db.query(sql, [image], (err, result) => {
        if (err) return res.json({Message: "Error"});
        return res.json({Status: "Success"});
    })
})


app.listen(8081, () => {
    console.log('Server was started on PORT 8081!');
});
