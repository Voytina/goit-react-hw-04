import axios from 'axios';

export default async function getPhoto (page,query){

    const ACCESS_KEY = 'iWfx0ZN2NhYGq_s3HF4eoUtsw2RO1j8y427RQZ7x_vw';
    const BASE_URL = 'https://api.unsplash.com';

    const response = await axios.get(`${BASE_URL}/search/photos`, {
        headers:{
            Authorization: `Client-ID ${ACCESS_KEY}`
        },
        params:{
            query,
            page, 
            per_page: 12,
        }
    })
    return response
}


