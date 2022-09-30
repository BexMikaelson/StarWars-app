import Darth_Vader from "../assets/images/Darth_Vader.webp";
const NotFound = () => {
  return (
    <div>
      <p>
        {" "}
        <strong>Oh no! Looks like you lost your way.</strong>
      </p>

      <div className="image">
        <img src={Darth_Vader} alt="DarthVader" className="img-fluid" />
      </div>
    </div>
  );
};

export default NotFound;
