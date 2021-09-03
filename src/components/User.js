import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

const User = ({ user, changeView, isListActive }) => {
  const classes = useStyles();
  const { first, last } = user.name;
  const { street, city } = user.location;
  const { email, registered, login } = user;
  const { medium } = user.picture;
  const { latitude, longitude } = user.location.coordinates;
  const streetName = street.name ? street.name : "no data";
  const cityName = city ? city : "no data";
  const registerDate = registered.date.slice(0, 10);

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
    <>
      <div className="userContainer">
        <Paper style={{ padding: 10, width: 300 }}>
          <div className="generalData">
            <Avatar
              style={{ marginRight: 20 }}
              className={classes.large}
              alt="Remy Sharp"
              src={medium}
            />
            <ul>{nameFull(first, last)}</ul>
          </div>
          <ul>
            {!isListActive && (
              <>
                <li>
                  <span>street</span>
                  {streetName} <span>city</span>
                  {cityName}
                </li>
                <li>
                  <span>email</span>
                  {email}
                </li>
                <li>
                  <span>registered</span>
                  {registerDate}
                </li>
              </>
            )}

            <li className="button">
              <Button
                component={Link}
                onClick={() => changeView()}
                to={isListActive ? `/users/${login.uuid}` : "/"}
                size="small"
                variant="outlined"
              >
                {isListActive ? "details" : "back"}
              </Button>
            </li>
          </ul>
        </Paper>
      </div>

      {!isListActive && (
        <div className="mapSection">
          <MapContainer
            className="mapContainer"
            center={[parseInt(latitude), parseInt(longitude)]}
            zoom={1}
            scrollWheelZoom={false}
          >
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[parseInt(latitude), parseInt(longitude)]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      )}
    </>
  );
};

export default User;
