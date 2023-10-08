import axiosService from "./axios.service";
import urls from "../constants/urls";


const imageService = {
    getAll: () => axiosService.get(urls.getAll).then(value => value.data),
    upload: (formData) => axiosService.post(urls.upload, formData),
}

export {imageService};