import axios from "axios";

export const fetchAqi = async (lat,lng) => {
    const response = await axios.get(`${import.meta.env.VITE_AIR_API_URL}:${lat};${lng}/?token=${import.meta.env.VITE_AIR_API_KEY}`);
    // console.log(response);
    if(response.status === 200){
        return response.data.data;
    }else{
        throw new Error('failed to fatch data ');
    }
}

