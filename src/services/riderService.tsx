
import axios from "./apiClient"



interface getRiderArgs {
    token: string
    id: string
    fpID: string
}



const getRider = async ({ token, id, fpID }: getRiderArgs) => {
    console.log("token", token)
    const config = {
        headers: { Authorization: token }
    };
    try {
        const response = await axios.get(`/api/foodprovider/${fpID}/${id}`, config);
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