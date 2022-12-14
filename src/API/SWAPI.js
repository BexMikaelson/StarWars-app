import axios from "axios";
const BASE_URL = "https://swapi.dev/api/";

// Get Peoples
const getPeoples = async (page) => {
    const res = await axios.get(`${BASE_URL}/people/?page=${page}`)
    return res.data
}

//Get one Person with id
const getPeople = async (id) => {
    const res = await axios.get(`${BASE_URL}/people/${id}`)
    return res.data
}

//Get Films
const getFilms = async () => {
    const res = await axios.get(`${BASE_URL}/films`)
    return res.data
}

//Get one Film with id
const getFilm = async (id) => {
    const res = await axios.get(`${BASE_URL}/films/${id}`)
    return res.data
}

const actions = {
    getPeoples,
    getPeople,
    getFilms,
    getFilm,
}

export default actions