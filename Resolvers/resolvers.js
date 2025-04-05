import { movies } from "../Partial/movies.partial.js";

export const resolvers = {
    Query: {
        getMovies: () => movies,
        getMovie: (_, { id }) => movies.find(movie => movie.id === id)
    },
    Mutation: {
        addMovie: (_, { title, director, releaseYear }) => {
            const newMovie = {
                id: String(movies.length + 1),
                title,
                director,
                releaseYear
            };
            movies.push(newMovie);
            return newMovie;
        }
    }
};
