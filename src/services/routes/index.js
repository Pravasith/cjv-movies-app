export const API_URL =
    process.env.NODE_ENV === "production" ? "/db" : "http://localhost:8000/db"

const DOMAIN =
    process.env.NODE_ENV === "production"
        ? "https://api-movies-cjv.herokuapp.com/api/v1"
        : "http://localhost:5000/api/v1"

export const API_BASE_URLS = {
    USERS: DOMAIN + "/users",
    MEDIA: DOMAIN + "/media",
}

export const API_URLS = {
    MOVIES: API_BASE_URLS.MEDIA + "/movies",
    FEATURED_MOVIES: API_BASE_URLS.MEDIA + "/featured?type=movie",
    FEATURED_TV_SHOWS: API_BASE_URLS.MEDIA + "/featured?type=tv-series",
}
