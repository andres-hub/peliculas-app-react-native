import axios from "axios";

const movieDB = axios.create({ 
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: '93f29e9c6fade9d16b768b39023a0c8d',
        language: 'es-ES'
    }
 })

 export default movieDB;