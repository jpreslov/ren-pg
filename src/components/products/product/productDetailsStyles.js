import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    // marginTop: "30vh",
    backgroundColor: "inherit",
    boxShadow: "none",
    maxHeight: `90%`,
    maxWidth: "60vw",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
    padding: "0",
  },

  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    fontWeight: "500",
    marginInline: "auto",
    [theme.breakpoints.down("sm")]: {
      marginTop: "26vh",
    },
    [theme.breakpoints.between("md", "lg")]: {
      marginTop: "28vh",
    },
    [theme.breakpoints.up("lg")]: {
      marginTop: "30vh",
      justifyContent: "center",
    },
  },


  media: {
    width: `100%`,
    padding: `5.25%`,
    [theme.breakpoints.down('md')]: {
      padding: '0'
    }
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  cardActions: {
    flexDirection: "column",
    textAlign: "start",
    float: "left",
    width: `100%`,
    marginTop: "1vh",
  },
  cardContent: {
    flexDirection: "column",
    textAlign: "start",
  },
  button: {
    textTransform: "capitalize",
    color: "white",
    backgroundColor: "#009c7b",
    marginTop: "2vh",
  },
  productInfo: {
    flexDirection: "column",
    // width: '100vw',
    fontWeight: "600",
    marginTop: "0",
  },
  inputDiv: {
    flexDirection: "column",
    display: "inherit",
    height: "7vh",
    fontWeight: "600",
  },
}));
