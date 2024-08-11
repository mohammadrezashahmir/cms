import axios from "axios"

export const getDataFromServer = async (url)=>{
    const response = await axios.get(url,{
        headers:{
            'Authorization':'Token f037cb5d1debb58ab2e261e7369d82529a0f1bef'
        }
    })
    console.log(response.data);
    
    return response.data
}