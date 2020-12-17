import React, { Component } from "react";
import { getMovies } from "./services/fakeMovieService";

class MoviesTable extends Component {
  state = {
    movies: getMovies(),
  };

  handleDelete = (movie) => {
    const filteredMovies = this.state.movies.filter((m) => m._id != movie._id);
    this.setState({ movies: filteredMovies });
  };

  render() {
    if (this.state.movies.length === 0) {
      return (
        <main className="container">
          <p> There are no movies in the database </p>
        </main>
      );
    }

    return (
      <main className="container">
        <p>Showing {this.state.movies.length} movies in the database </p>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <th scope="row"> {movie.title} </th>
                <td> {movie.genre.name} </td>
                <td> {movie.numberInStock} </td>
                <td> {movie.dailyRentalRate} </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    );
  }
}

export default MoviesTable;
