import { useEffect, useState } from 'react'

import movieDB from '../api/movieDB';
import { MovieDBResponse, Movie } from '../interfaces/movieInterface';

interface MoviesState{
  NowPlaying: Movie[];
  Popular: Movie[];
  TopRated: Movie[];
  Upcoming: Movie[];
}

export const useMovies = () => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [moviesState, setMoviesState] = useState<MoviesState>({
      NowPlaying: [],
      Popular: [],
      TopRated: [],
      Upcoming: [],
    });

    const getMovies = async ()=>{
        
      const nowPlayinPromise = movieDB.get<MovieDBResponse>('/now_playing');
      const populaPromise = movieDB.get<MovieDBResponse>('/popular');
      const topRatePromise = movieDB.get<MovieDBResponse>('/top_rated');
      const upcominPromise = movieDB.get<MovieDBResponse>('/upcoming');
      
      const response = await Promise.all([
        nowPlayinPromise,
        populaPromise,
        topRatePromise,
        upcominPromise
      ]);

      setMoviesState({
        NowPlaying: response[0].data.results,
        Popular: response[1].data.results,
        TopRated: response[2].data.results,
        Upcoming: response[3].data.results,
      });
      setIsLoading(false);

    } 
  
     useEffect(() => {
        getMovies();
     }, []);
     
  
  return {
    ...moviesState,
    isLoading
  }
}
