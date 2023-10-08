import React, {useEffect, useState} from 'react';

import './UploadFileStyle.css';
import {imageService} from "../../services";
import axiosService from "../../services/axios.service";


const UploadFile = () => {
    let [file, setFile] = useState();
    const [images, setImages] = useState([]);


    const handleFile = (e) => {
        setFile(e.target.files[0]);
    }

    const handleUpload = () => {
        const formData = new FormData();
        formData.append('image', file);

        imageService.upload(formData)
            .then(() => {
                // Оновіть стан images після успішного завантаження
                imageService.getAll()
                    .then(res => setImages(res))
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));
    }

    useEffect(()=>{
        imageService.getAll()
            .then(res => setImages(res));
    }, []);


    return (
        <div className={'uploadFile'}>
            <input type="file" onChange={handleFile}/>
            <button onClick={handleUpload}>upload</button>

            <div className={'foto-block'}>{
                images && images.map(obj =>
                    <div key={obj.id} className={'foto'}>
                        <img src={`http://localhost:8081/images/` + obj.image} alt="fot"/>
                    </div>
                )
            }</div>
        </div>
    );
};

export default UploadFile;