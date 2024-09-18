import axios from 'axios';

const settings = {
    withCredentials: true
}

export const instance = axios.create({
    baseURL: 'https://poker247tech.ru/',
    ...settings
})

type postSingType = {
    sign: string
    language: string
    period: string
}

export const api = {
    postSigns(data: postSingType) {
        return instance.post('get_horoscope', data)
    }
}