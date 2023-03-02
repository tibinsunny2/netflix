import React, { useEffect, useState } from 'react'
import instance from './instance'
import './Row.css'
function Row({ title, fetchUrl, isLargeRow }) {
    const base_url = "https://image.tmdb.org/t/p/original/";
    const [movies, setMovies] = useState([])
    useEffect(() => {
        async function fetchData() {
            const request = await instance.get(fetchUrl)
            setMovies(request.data.results)
        }
        fetchData()
    }, [])
    console.log(movies);
    return (
        <div className="row">
            <h2>{title}</h2>
            <div className={`row__posters ${isLargeRow && "row__posterLarge"}`}>
                {movies.map((movies) => (

                    <img
                        key={movies.id}
                        className="row_poster"
                        src={`${base_url}${isLargeRow ? movies.poster_path : movies.backdrop_path}`}
                        alt={movies.name}
                    />

                ))}
            </div>
        </div>
    )
}

export default Row