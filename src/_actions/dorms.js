import axios from 'axios'
import { API_URL } from 'react-native-dotenv'


export const getDorms = (param = '') => {
    let query = '';
    if (param !== '') {
        query = '?city=' + param;
    }

    return {
        type: 'GET_DORMS',
        payload: axios.get(API_URL + 'dorms' + query)
    }
}

export const getDormDetail = (id) => {
    return {
        type: 'GET_DORMDETAIL',
        payload: axios.get(API_URL + 'dorms/' + id)
    }
}



// https://murdy.herokuapp.com/api/v1/