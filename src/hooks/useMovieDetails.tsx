import { useEffect, useState } from "react"
import movieDB from "../api/movieDB"
import { Cast, CreditsResponse } from "../interfaces/creditsInterfaces"
import { MovieFull } from '../interfaces/movieInterface';

interface MovieDetails{
    isLoading: boolean;
    movieFull?: MovieFull;
    cast: Cast[];
}

export const useMoviesDetails = (movieId: number)=>{

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: []
    });

    const geMovieDetails = async() => {
        
       const movieDetailspromise = movieDB.get<MovieFull>(`/${movieId}`);
       const castPromise = movieDB.get<CreditsResponse>(`/${movieId}/credits`);

       const [miveDetailsResponse, castResponse] = await Promise.all([movieDetailspromise, castPromise]);

       setState({
        isLoading: false,
        movieFull: miveDetailsResponse.data,
        cast: castResponse.data.cast
       });

    }

    useEffect(() => {
        geMovieDetails();
    }, []);

    return{
        ...state
    }

}