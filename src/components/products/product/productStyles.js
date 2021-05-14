import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
    justifyContent: "center",
  },
  root: {
    display: "flex",
    transition: "0.2s",
    // maxWidth: '100%',
    backgroundColor: "inherit",
    boxShadow: "none",
    minHeight: "20vh",
    minWidth: "30vw",
    justifyContent: "center",
    flexWrap: "wrap",
    // marginInline: "4vw",
    [theme.breakpoints.between("xs", "md")]: {
      height: "auto",
      width: "70vw",
      paddingInline: "0",
    },
    [theme.breakpoints.between("md", "xl")]: {
      height: "auto",
      maxWidth: "30vw",
      marginLeft: "2vw",
      marginRight: "1vw",
    },
  },
  link: {
    textDecoration: "none",
  },
  media: {
    width: "98%",
    height: "100%",
    // [theme.breakpoints.between("md", "xl")]: {
    //   maxWidth: "50vw",
    //   maxHeight: "55vh",
    // },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  price: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 13,
    },
  },
  cardActions: {
    display: "flex",
    justifyContent: "center",
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    textAlign: "center",
  },
}));
