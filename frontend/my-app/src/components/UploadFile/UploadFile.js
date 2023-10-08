import React, {useState} from 'react';

import './UploadFileStyle.css';
import {imageService} from "../../services";


const UploadFile = () => {
    let [file, setFile] = useState();

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image', file);

        imageService.upload(formData)
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