import React, {useState} from 'react';

import './UploadFileStyle.css';


const UploadFile = () => {
    let [file, setFile] = useState();

    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = () => {

    }


    return (
        <div className={'uploadFile'}>
            <input type="file" onChange={handleFile}/>
            <button onClick={handleUpload}>upload</button>

        </div>
    );
};

export {UploadFile};