// API
import SWAPI from "../API/SWAPI";
import getSwapiIdFromUrl from "../API/Fetch-SWAPI-ID";

// Imported react
import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";

// loading
import LoadingSpinner from "../components/LoadingSpinner";

const Film = () => {
  const [film, setFilm] = useState();
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  // Get film from API
  const fetchFilm = async (id) => {
    // get data
    const data = await SWAPI.getFilm(id);

    // set data results to film
    setFilm(data);

    setLoading(true);
  };

  // Get people from api when component is first mounted
  useEffect(() => {
    fetchFilm(id);
  }, [id]);

  if (!loading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <ListGroup className="card mb-5 p-0">
        <div className="card-header p-3">
          <h4 className="m-0">{film.title}</h4>
        </div>

        <div className="card-body">
          <div>
            <h5>Episode: </h5>
            <p>{film.episode_id}</p>
          </div>

          <div>
            <h5>Director: </h5>
            <p>{film.director}</p>
          </div>

          <div>
            <h5>Producer: </h5>
            <p>{film.producer}</p>
          </div>

          <div>
            <h5>Release date:</h5>
            <p>{film.release_date}</p>
          </div>

          <br />

          <ListGroup>
            <h4>The Characters</h4>

            {film.characters.length > 0 &&
              film.characters.map((character, index) => (
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
          <button type="button" onClick={() => navigate(-1)} className="btn">
            Back
          </button>
        </div>
      </ListGroup>
    </>
  );
};

export default Film;
