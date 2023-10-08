import React, {useState} from 'react';

import './UploadFileStyle.css';
import axios from "axios";


const UploadFile = () => {
    let [file, setFile] = useState();

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image', file);

        axios.post('http://localhost:8081/upload', formData)
            .then(res => {
                if (res.data.Status === "Success") {
                    console.log("Success");
                } else {
                    console.log("Failed");
                }
            })
            .catch(err => console.log(err));
    }



    return (
        <div className={'uploadFile'}>
            <input type="file" onChange={handleFile}/>
            <button onClick={handleUpload}>upload</button>

        </div>
    );
};

export default UploadFile;