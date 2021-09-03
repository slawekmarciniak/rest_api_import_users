import Paper from "@material-ui/core/Paper";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";

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
            <Button size="small" variant="outlined">
              {isListActive && (
                <Link
                  style={{ textDecoration: "none", color: "gray" }}
                  onClick={() => changeView()}
                  to={`/users/${login.uuid}`}
                >
                  details
                </Link>
              )}
              {!isListActive && (
                <Link
                  style={{ textDecoration: "none", color: "gray" }}
                  to={"/"}
                  onClick={() => changeView()}
                >
                  back
                </Link>
              )}
            </Button>
          </li>
        </ul>
      </Paper>
    </div>
  );
};

export default User;
