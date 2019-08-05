import axios from 'axios';

const appId = '98cc5739c3c916225c416556ff81b744';

const forecastService = (city, callBack)=>{
    axios.get('https://api.openweathermap.org/data/2.5/forecast?q='+city+',BR&lang=pt&units=metric&appid='+appId)
    .then((response)=>{
        callBack(response.data);
    },
    (error)=>{
        console.error(error);
        callBack();
    });
}

export default forecastService;