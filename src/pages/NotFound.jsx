import Darth_Vader from "../assets/images/Darth_Vader.webp";
const NotFound = () => {
  return (
    <div>
      <p>
        {" "}
        <strong>Oh no! Looks like you lost your way. I told you NOT to push the button!</strong>
      </p>

      <div className="image">
        <img src={Darth_Vader} alt="DarthVader" className="img-fluid" />
      </div>
    </div>
  );
};

export default NotFound;
