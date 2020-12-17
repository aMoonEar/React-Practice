import React from 'react'
import { getMovies } from '../services/fakeMovieService';

class MoviesTable extends Components {
    state = {
        movies: getMovies()
    };

    handleDelete = (movie) => {

    };

    render() {
        
    }
}

export default MoviesTable
