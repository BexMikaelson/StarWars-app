// API
import SWAPI from "../API/SWAPI"
import getSwapiIdFromUrl from '../API/Fetch-SWAPI-ID'

// Imported react
import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import ListGroup from "react-bootstrap/ListGroup"

//Loading
import LoadingSpinner from '../components/LoadingSpinner'


const PeoplePage = () => {
    const [person, setPerson] = useState()
    const [loading, setLoading] = useState(false)
    const { id } = useParams()
    const navigate = useNavigate()

    // Get person from API
	const fetchPerson = async (id) => {
        // get data
		const data = await SWAPI.getPeople(id)

        // set data results to person
		setPerson(data)

        
        setLoading(true)
	}

    // Get people from api when component is first mounted
	useEffect(() => {
		fetchPerson(id)
	}, [id])

    if(!loading) {
        return (
            <LoadingSpinner />
        )
    }

    return (
        <>
            <ListGroup className="card mb-5 p-0">
                <div className="card-header p-3">
                    <h4>{person.name}</h4>
                </div>

                <div className="card-body">

                    <div>
                        <h5>Gender: </h5>
                        <p>{person.gender}</p>
                    </div>

                    <div>
                        <h5>Birth year: </h5>
                        <p>{person.birth_year}</p>
                    </div>

                    <div>
                        <h5>Height: </h5>
                        <p>{person.height} cm</p>
                    </div>

                    <div>
                        <h5>Mass: </h5>
                        <p>{person.mass} kg</p>
                    </div>

                    <div>
                        <h5>Hair color: </h5>
                        <p>{person.hair_color}</p>
                    </div>

                    <div>
                        <h5>Skin color: </h5>
                        <p>{person.skin_color}</p>
                    </div>

                    <div>
                        <h5>Eye color: </h5>
                        <p>{person.eye_color}</p>
                    </div>

                    <br />

                    <ListGroup>
                        
                        <h4>{person.name} in these films you see</h4>
                        
                        {person.films.length > 0 && (
                            person.films.map((film, index) => 
                            <Link 
                                key={index} 
                                to={`/films/${getSwapiIdFromUrl(film)}`} 
                                className="list-group-item col-md-4" 
                            >
                                Film {getSwapiIdFromUrl(film)}
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

export default PeoplePage