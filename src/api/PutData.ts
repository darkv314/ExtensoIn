import axios from "./axios";

const putData = async (url: string, body: any, accessToken: string) => {
    try {
        const response = await axios.put(url, body, {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
            },
            withCredentials: true,
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
        return err.response;
    }
};

export default putData;
