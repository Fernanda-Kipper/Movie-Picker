import { useState } from 'react'
import axios from 'axios'

import '../styles/pages/Home.css'

import ModalResults from '../components/ModalResults'

export default function Home(){
    const [movieName, setMovieName] = useState("")
    const [moviesList, setMoviesList] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false)

    function handleModal(){
        setIsModalOpen(!isModalOpen)
    }

    function handleSubmit(event){
        event.preventDefault()
        if(movieName === ""){
            return alert('Preencha o campo corretamente')
        }
        axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&query=${movieName}&language=pt-BR`)
        .then(res=> {
            setMoviesList(res.data.results) 
        })
        setMovieName("")
        setIsModalOpen(true)
    }

    return(
        <div className="container">
            {isModalOpen ? <ModalResults results={moviesList} handleModal={handleModal}/> : null}
            <header>
                <h1>Movie Picker</h1>
                <small>Digite o nome de um filme que você gostou de assistir e recomendaremos filmes pra você </small>
            </header>
            <main>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Diz aí, qual filme você curte?" onChange={event => setMovieName(event.target.value)} value={movieName} required/>
                    <button type="submit">Buscar recomendação</button>
                </form>
                <img src="home_cinema.svg" alt="Hora do Filme imagem"/>
            </main>
        </div>
    )
}