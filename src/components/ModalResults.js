import '../styles/components/ModalResults.css'

export default function ModalResults({results, handleModal}){

    return(
        <div className="modal-container">
            <div className="content">
                <span onClick={handleModal}>X</span>
                <h3>Qual filme abaixo é o que você tinha em mente?</h3>
                <small>Selecione o filme correto para te ofercermos as melhores recomendações</small>
                    {results.length > 0 ? 
                    (
                        <ul>
                            {results.map(result => {
                                return(
                                    <li key={result.id}>
                                        <div className="movie-content">
                                        <img src={`https://www.themoviedb.org/t/p/w1280/${result.poster_path}`} alt={`Poster do filme ${result.title}`}/>
                                        <p>{result.title}</p>
                                        </div>
                                        <a href={`/recommended/${result.id}`}>Mostrar recomendações</a>
                                    </li>
                                )
                            })}
                        </ul>
                    ): 
                    (
                        <p className="not-found">não encontramos nenhum filme compatível para realizar as recomendações :(</p>
                    )
                    }
            </div>
        </div>
    )
}