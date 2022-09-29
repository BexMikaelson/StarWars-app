// API
import SWAPI from "../API/SWAPI"

// Imported react + bootstrap
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import ListGroup from "react-bootstrap/ListGroup"
import Container from "react-bootstrap/esm/Container"
import Button from 'react-bootstrap/Button'
// Imported Loading Spinner
import LoadingSpinner from '../components/LoadingSpinner'

const FilmsPage = () => {
	const [films, setFilms] = useState([])
	const [loading, setLoading] = useState(false)
	const [page, setPage] = useState(1)

	// Get films from api when component is first mounted
	useEffect(() => {
		// Get films from api
		const getFilms = async () => {
			
			setLoading(true)

			// get data
			const data = await SWAPI.getFilms()

			
			setFilms(data)

			
            setLoading(false)
		}

		getFilms()
	}, [page])

	return (
		<>
			{loading && <LoadingSpinner/>}

			<h1>Films</h1>

			{!loading && (
				<div className="row d-flex justify-content-center">
					{films.results?.map((film, index) => (
						<Container
							key={index} 
							className="card d-flex justify-content-center  m-3 p-0 col-lg-3 col-md-5 col-sm-12"
						>
							<div>
								<h5>{film.title}</h5>
							</div>

							<div className="card-body ">
								<div>
									<h5>Episode: </h5>
									{film.episode_id}
								</div>
								<div>
									<h5>Released: </h5>
									{film.release_date}
								</div>
								<div> 
									<h5>characters</h5>
                                    {film.characters.length}
								</div>

								<Link 
									type="button" 
									to={`/films/${index + 1}`} 
									className="btn" 
								>
									Read More
								</Link>
							</div>
						</Container>
					))}
				</div>
			)}
			<div className="d-flex justify-content-between mt-4">
				<Button
					variant="button" 
					disabled={page === 1} 
					className="btn"
					onClick={() => setPage(prevValue => prevValue - 1)}
				>
					Previous Page
				</Button>

				{page} / 1

				<Button
					variant="button" 
					disabled={!films.next} 
					className="btn"
					onClick={() => setPage(prevValue => prevValue + 1)}
				>
					Next Page
				</Button>
			</div>
		</>
	)
}

export default FilmsPage