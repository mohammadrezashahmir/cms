import axios from "axios"

export const getDataFromServer = async (url) => {
    const response = await axios.get(url, {
        headers: {
            'Authorization': 'Token f037cb5d1debb58ab2e261e7369d82529a0f1bef'
        }
    })
    console.log(response.data);
    return response.data
}
export const sendDataToServer = async (url, data, method = 'POST') => {
    try {
        const response = await axios({
            url,
            method,
            data,
            headers: {
                'Authorization': 'Token f037cb5d1debb58ab2e261e7369d82529a0f1bef',
                'Content-Type': 'multipart/form-data',
            }
        });
        console.log(response.data);
        return response.data;
    } catch (error) {
        console.error(`An error occurred while ${method === 'POST' ? 'posting' : 'putting'} data to server:`, error);
        throw error;
    }
};