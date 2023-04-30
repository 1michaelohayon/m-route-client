import axios from "axios"

const baseUrl = 'http://localhost:5000/api/foodprovider'

interface getRiderArgs {
    token: string
    id: string
    fpID: string
}



const getRider = async ({ token, id, fpID }: getRiderArgs) => {
    const config = {
        headers: { Authorization: token }
    };
    try {
        const response = await axios.get(`${baseUrl}/${fpID}/${id}`, config);
        return response.data;
    } catch (error) {
        console.log(error);
    }
    return null;
}

const riderService = {
    getRider
}

export default riderService;