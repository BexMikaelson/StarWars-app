import wisdom_yoda from "../assets/images/wisdom_yoda.jpeg";
const Home = () => {
  return (
    <div>
      <h1>Welcome to all things Star Wars!</h1>
      <h4>But in mind you must keep!</h4>
      <h4>
        The FORSE is NOT a POWER you have, it's NOT about lifting ROCKS.
        <br />
        It's about the ENERGY between all THINGS, a balance, that BINDS the
        UNIVERSE together.
      </h4>
      <p>-Luke Skywalker</p>

      <div className="image">
        <img src={wisdom_yoda} alt="yoda" className="img-fluid" />
      </div>
    </div>
  );
};

export default Home;
