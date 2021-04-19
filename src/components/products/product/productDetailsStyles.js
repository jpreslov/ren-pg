import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  root: {
    display: "flex",
    marginTop: "32vh",
    backgroundColor: "inherit",
    boxShadow: "none",
    maxHeight: "90%",
    maxWidth: "60vw",
    justifyContent: "center",
    alignContent: "center",
    flexWrap: "wrap",
  },
  content: {
    [theme.breakpoints.between("sm", "lg")]: { marginTop: "6vh" },
    [theme.breakpoints.up("xl")]: {
      marginTop: "25vh",
      justifyContent: "center",
    },
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // alignContent: "center",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    fontWeight: "500",
    marginInline: "auto",
  },

  grid: {
    [theme.breakpoints.only("sm")]: {
      marginTop: "30vh",
    },
    [theme.breakpoints.between("md", "xl")]: {
      marginTop: "10vh",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "40vh",
    },
  },

  media: {
    height: "10px",
    padding: "36.25%",
    [theme.breakpoints.between("xs", "sm")]: {
      padding: "40%",
      width: "60vw",
    },
    [theme.breakpoints.between("md", "xl")]: {
      width: "30vw",
      padding: "30%",
    },
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
  },
  cardContent: {
    flexDirection: "column",
    textAlign: "start",
  },
  button: {
    textTransform: "capitalize",
    color: "white",
    backgroundColor: "#009c7b",
  },
  productInfo: {
    flexDirection: "column",
    // width: '100vw',
    fontWeight: "600",
  },
  inputDiv: {
    flexDirection: "column",
    display: "inherit",
    height: "7vh",
    fontWeight: "600",
  },
}));
