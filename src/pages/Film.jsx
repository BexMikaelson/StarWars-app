// API
import SWAPI from "../API/SWAPI"
import getSwapiIdFromUrl from '../API/Fetch-SWAPI-ID'

// Imported react
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import ListGroup from "react-bootstrap/ListGroup"

// loading
import LoadingSpinner from '../components/LoadingSpinner'

const Film = () => {
    const [film, setFilm] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    // Get film from API
	const fetchFilm = async (id) => {
        // get data
		const data = await SWAPI.getFilm(id)

        // set data results to film
		setFilm(data)

        
		setLoading(true)
	}

    // Get people from api when component is first mounted
	useEffect(() => {
		fetchFilm(id)
	}, [id])

    if(!loading) {
        return (
            <LoadingSpinner/>
        )
    }

    return (
        <>
            <ListGroup className="card border-1 rounded  mb-5 p-0">
                <div className="card-header p-3">
                    <h4 className="m-0">{film.title}</h4>
                </div>

                <div className="card-body">
                    <h5>Attributes</h5>

                    <p>
                        <strong>Episode: </strong>
                        {film.episode_id}
                    </p>

                    <p>
                        <strong>Director: </strong>
                        {film.director}
                    </p>

                    <p>
                        <strong>Producer: </strong>
                        {film.producer}
                    </p>

                    <p>
                        <strong>Release date:</strong>
                        {film.release_date}
                    </p>

                    <br />

                    <ListGroup>
                        
                        <h4>The Characters</h4>

                        {film.characters.length > 0 && (
                            film.characters.map((character, index) =>
                                <Link
                                    key={index} 
                                    to={`/people/${getSwapiIdFromUrl(character)}`} 
                                    className="list-group-item col-md-4" 
                                >
                                    Character {getSwapiIdFromUrl(character)}
                                </Link>
                        ))}
                    </ListGroup>
                </div>
                <div className="buttons d-flex justify-content-between p-3">
                    <button
                            type="button"
                            onClick={() => navigate(-1)} 
                            className="btn"
                        >
                            Back
                    </button>
                </div>
            </ListGroup>
        </>
    )
}

export default Film