import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  container: {
    display: "inherit",
    flexDirection: "column",
    width: "50vw",
    marginLeft: "0",
    paddingLeft: "0",
    marginTop: "3vh",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
      marginTop: "2vh",
      paddingTop: "1vh",
      paddingBottom: "1vh",
      flexDirection: "column",
    },
    [theme.breakpoints.between("sm", "lg")]: {
      width: "40vw",
    },
  },
  media: {
    float: "left",
    height: "18vh",
    width: "11vw",
    margin: "1vw",
    [theme.breakpoints.up("md")]: { marginRight: "3vw" },
    [theme.breakpoints.down("md")]: { width: "86%", height: "30vh", justifySelf: "center" },
    // [theme.breakpoints.between('md', 'lg')]: { height: '86%', width: "auto" },
  },
  text: {
    fontSize: 16,
    [theme.breakpoints.down('md')]: { fontSize: 14 },
    // marginRight: "2vw"
  },
  cardContent: {
    textAlign: 'end',
  },

  button: {
    textTransform: "capitalize",
    width: "4vw",
  },
  removeButton: {
    marginLeft: "1vw",
    marginTop: "1vw",
    // size: '5vh',
  },
  qtyInput: {
    width: "2vw",
    cursor: "pointer",
  },
}));
