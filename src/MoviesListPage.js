import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

import './styles/pages/MoviesList.css'

export default function MoviesListPage(){
    const { id } = useParams()
    const [movies, setMovies] = useState([])

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}/recommendations?api_key=${process.env.REACT_APP_API_KEY}&language=pt-BR&page=1`)
        .then(res => setMovies(res.data.results))
    },[id])

    return(
        <div className="list-container">
            <header>
                <a href="/">{'< voltar'}</a>
                <img src="/popcornTime.svg" alt="Imagem de Pipoca"/>
                <h1>Prepara a pipoca, ai vai as nossas recomendações!</h1>
            </header>
            <ul>
                {movies.map(movie => {
                    console.log(movie)
                    return(
                        <li key={movie.id}>
                            <img src={`https://www.themoviedb.org/t/p/w1280/${movie.poster_path}`} alt={`Poster do filme ${movie.title}`}/>
                            <div className="movie-informations">
                                <h2>{movie.title}</h2>
                                <p>{movie.overview}</p>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}