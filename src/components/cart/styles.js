import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  cart: {justifyContent: 'center'},
  cartGrid1: {
    display: "flex",
    justifyContent: "center",
    margin: "auto",
    flexDirection: "row",
    width: "100%",
  },
  title: {
    marginTop: "20vh",
    textAlign: "center",
    
  },
  cartDetails: {
    width: "70vw",
    flexDirection: "row",
    // justifyContent: "end",
    textAlign: "end",
    marginTop: "3vh",
  },
  emptyButton: {
    minWidth: "100px",
    height: "4vh",
    textTransform: "capitalize",
    backgroundColor: "#009c7b",

    [theme.breakpoints.up("xs")]: {
      marginRight: "20px",
    },
  },
  checkoutButton: {
    minWidth: "100px",
    height: "4vh",
    textTransform: "capitalize",
  },
  link: {
    textDecoration: "none",
  },

  emptyCartDiv: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    // alignContent: 'center',
    textTransform: "capitalize",
  },
  button: {
    [theme.breakpoints.up("md")]: {
      width: "10vw",
    },
    alignSelf: "center",
    fontWeight: "600",
    textTransform: "capitalize",
    color: "white",
    backgroundColor: "#009c7b",
    marginTop: "1vh",
    width: "40vw",
  },
}));
