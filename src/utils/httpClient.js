const Api = "https://api.themoviedb.org/3";

export function get(path){
    return fetch(Api + path, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYmQ0ZDMxY2JiYjE0OWJkNjJiYjllNDJhODcwMzM1MiIsInN1YiI6IjY0MDBmMWQzYzcxNzZkMDA4NTE3OTgxNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.acZrSWCXYgg3vgwADBvdnhO3hj7aHdYZjL-i3MxNdbk",
          "Content-Type": "application/json;charset=utf-8",
        },
      })
        .then((result) => result.json());
}