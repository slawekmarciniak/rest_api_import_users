import { Link } from "react-router-dom";

const User = ({ user, changeView }) => {
  const { first, last } = user.name;
  const { street, city } = user.location;
  const { email, registered, login } = user;
  const { medium } = user.picture;

  const streetName = street.name ? street.name : "no data";
  const cityName = city ? city : "no data";

  const nameFull = (first, last) => {
    if (first && last) {
      return (
        <>
          <li>{first}</li>
          <li>{last}</li>
        </>
      );
    } else return <li>"no name and surname in data"</li>;
  };

  return (
    <div className="userContainer">
      <ul>
        {nameFull(first, last)}
        <li>
          {streetName} City: {cityName}
        </li>
        <li>{email}</li>
        <li>{registered.date}</li>
        <li>
          <img src={medium} alt="p" />
        </li>
      </ul>
      <Link onClick={() => changeView()} to={`/users/${login.uuid}`}>
        Show Details
      </Link>
    </div>
  );
};

export default User;
