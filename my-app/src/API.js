import axios from "axios";

const BASE_URL = 'https://swapi.dev/api'
const instance = axios.create({
    baseURL: BASE_URL
})

export const api = {
    getAllFilms() {
        return instance.get('/films/')
    },
    getActors() {
        return instance.get('/people/')
    },
    getFilm(id) {
        return instance.get(`/films/${id}`)
    },
    getActor(url) {
        return instance.get(url.replace(BASE_URL, ''))
    }
}