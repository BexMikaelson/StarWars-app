// API
import SWAPI from "../API/SWAPI";

// Imported react
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

// Imported Loading Spinner
import LoadingSpinner from "../components/LoadingSpinner";

const PeoplesPage = () => {
  const [people, setPeople] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  

  // Get people from api when component is first mounted
  useEffect(() => {
    // Get people from API
    const fetchPeople = async () => {
      setLoading(true);

      // get data
      const data = await SWAPI.getPeoples(page);

      // set data results to people
      setPeople(data);

      // Set loading to false after getting data.
      setLoading(false);
    };

    fetchPeople();
  }, [page]);

  return (
    <>
      {loading && <LoadingSpinner />}

      <h1>People</h1>

      {!loading && (
        <div className="row d-flex justify-content-between">
          {people.results?.map((people, index) => (
            <ListGroup.Item
              key={index}
              className="card border-1 rounded m-3 div-0 col-lg-3 col-md-5 col-sm-12"
            >
              <div className="card-header p-3">
                <h4>{people.name}</h4>
              </div>

              <div className="card-body">
                <div className="card-header bg-white">
                  <h6>Gender: </h6>
                  {people.gender}
                </div>
                <div className="card-header bg-white">
                  <h6>Born: </h6>
                  {people.birth_year}
                </div>
                <div className="card-header bg-white mb-3">
                  <h6>In </h6>
                  {people.films.length} films
                </div>

                <Link
                  type="button"
                  to={`/people/${index + 1}`}
                  className="btn btn-primary"
                >
                  Read More
                </Link>
              </div>
            </ListGroup.Item>
          ))}
        </div>
      )}

      <div className="d-flex justify-content-between mt-4">
        <Button
          variant="button"
          disabled={page === 1}
          className="btn btn-primary border-secondary"
          onClick={() => setPage((prevValue) => prevValue - 1)}
        >
          Previous Page
        </Button>
        {page} / 9
        <Button
          variant="button"
          disabled={!people.next}
          className="btn btn-primary border-secondary"
          onClick={() => setPage((prevValue) => prevValue + 1)}
        >
          Next Page
        </Button>
      </div>
    </>
  );
};

export default PeoplesPage;
