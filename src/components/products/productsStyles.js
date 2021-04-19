import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    boxShadow: "none",
  },
  grid: {
    marginTop: "18vh",

    [theme.breakpoints.between("sm", "lg")]: { marginTop: "25vh" },
  },
  content: {
    display: "inherit",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8),

    [theme.breakpoints.between("sm", "xl")]: {
      marginTop: "6vh",
      justifyContent: "center",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "10vh",
    },
  },
}));
