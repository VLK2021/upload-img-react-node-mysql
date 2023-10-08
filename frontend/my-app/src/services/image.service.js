import axiosService from "./axios.service";
import urls from "../constants/urls";


const imageService = {
    upload: (formData) => axiosService.post(urls.upload, formData)
}

export {imageService};