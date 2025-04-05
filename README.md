# SysArch_Activity_GraphQL

TO Run the program follow this instruction po

enter commandline: node index

query testing :
#Get All Movies

query {
  getMovies {
    id
    title
    director
    releaseYear
  }
}

#Get a Movie by ID
graphql
Copy
Edit
query {
  getMovie(id: "1") {
    title
    director
  }
}

#Add a New Movie
mutation {
  addMovie(title: "The Matrix", director: "Lana Wachowski", releaseYear: 1999) {
    id
    title
  }
}
