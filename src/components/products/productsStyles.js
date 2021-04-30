import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    boxShadow: "none",
  },
  grid: {
    marginTop: "18vh",
    },
  content: {
    display: "inherit",
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(10),
    justifyContent: "center",
    
    [theme.breakpoints.between("xs", "xl")]: {
      marginTop: "1vh",
    },
    [theme.breakpoints.up("xl")]: {
      marginTop: "10vh",
    },
  },
}));
