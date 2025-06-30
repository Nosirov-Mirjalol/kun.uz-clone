import { BASE_url,API_key } from "./API";

const request=async (url)=>{
    const response=await fetch(BASE_url,{
        headers:{'X-Api-Key':API_key}
    })
    const data=await response.json()
    console.log(data.articles);
    
}
request(BASE_url)