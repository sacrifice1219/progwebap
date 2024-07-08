import axios from "axios";
// App.js
// import dotenv from 'dotenv';
// dotenv.config();

// const apiKey = process.env.REACT_APP_API_KEY;


const URL = 'https:api.openweathermap.org/data/2.5/weather';
const API_KEY ='0daec2178920b3eb3e8815512c28096c';

export const fetchWeather = async (query) => {
    const {data} = await axios.get(URL, {
        params:{
            q: query,
            units: 'metric',
            APPID: API_KEY
        }
    });

    return data;
}