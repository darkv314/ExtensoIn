import axios from "./axios";
//@ts-ignore
const getData = async (url: string, accessToken?: string) => {
    try {
        const response = await axios.get(url, {
            // headers: { Authorization: `Bearer ${accessToken}` },
        });
        return response;
    } catch (err: any) {
        if (err.response) {
            console.log(err.response.data.message);
            console.log(err.response.status);
            console.log(err.response.headers);
        } else {
            console.log(`Error: ${err.message}`);
        }
    }
};

export default getData;
