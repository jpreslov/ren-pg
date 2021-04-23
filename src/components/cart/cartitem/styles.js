import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  cartItem: {
    display: "flex",
    width: "50vw",

    [theme.breakpoints.down("sm")]: {
      marginTop: "2vh",
      marginRight: "3vh",
      // marginBottom: '0.5vh',
      marginLeft: "3vh",
      paddingTop: "1vh",
      paddingBottom: "1vh",
    },
    [theme.breakpoints.between("sm", "lg")]: {
      width: "40vw",
    },
  },
  media: {
    height: "20vh",
    width: "20vh",
    marginTop: "1vw",
    marginLeft: "1vw",
    [theme.breakpoints.down("md")]: { width: "86vw" },
  },
  text: {
    fontSize: 16,
  },
  cardContent: {
    flexDirection: "row",
  },

  button: {
    textTransform: "capitalize",
    width: "4vw",
  },
  removeButton: {
    marginLeft: "1vw",
    marginTop: "1vw",
    // size: '5vh',
    position: "absolute",
  },
  qtyInput: {
    width: "2vw",
    cursor: "pointer",
  },
}));
