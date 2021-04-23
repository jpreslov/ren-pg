import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  grid: {
    display: "flex",
    marginTop: "35vh",
    justifyContent: "center",
    alignContent: "center",
    textAlign: "center",
  },
  infoDiv: {
    width: "100vw",
    height: "auto",
    textAlign: "start"
  },
  info: {
    marginInline: "10%",

  },
  infoTwo: {
    marginInline: "33%",
    paddingTop: "10vh",
  },
  button: {
    height: "8vh",
    width: "9vh",
    border: "none",
  },
  svgIcon: {
    fontSize: "6vh",
  },
}));
