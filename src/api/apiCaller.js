import axios from 'axios';
import * as Config from './../constants/Config';

//Call Api from server
export default function callApi (endpoint, method = 'GET', body){
    return axios({
        method: method,
        url:`${Config.API_URL}/${endpoint}`,
        data: body //if body is null -> GET
    }).catch (err => {
        console.log(err);
    });
};