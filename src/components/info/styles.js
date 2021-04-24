import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grid: {
    display: "flex",
    marginTop: "35vh",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
    flexDirection: "column",
  },
  buttonGroup: {
    width: "50vw",
    justifyContent: "space-around",
    alignSelf: "center",
  },
  button: {
    height: "10vh",
    width: "12vh",
    border: "none",
  },
  svgIcon: {
    fontSize: "9vh",
  },
}));
