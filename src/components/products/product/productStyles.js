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
    marginInline: "2vw",
    [theme.breakpoints.between("xs", "md")]: {
      height: "auto",
      width: "70vw",
      marginInline: "0",
      paddingInline: "0",
    },
    [theme.breakpoints.between("md", "xl")]: {
      height: "auto",
      minWidth: "40vw",
      maxWidth: "50vw",
      marginInline: "5vw",
    },
    // [theme.breakpoints.between("md, xl")]: {
    //   height: "auto",
    //   width: "50%",
    // },
  },
  link: {
    textDecoration: "none",
  },
  media: {
    width: "100%",
    height: "90%",
    paddingTop: "50%", // 16:9
    paddingBottom: "40%", // 16:9
    paddingInline: "6.25%", // 16:9
    [theme.breakpoints.between("md", "xl")]: {
      maxWidth: "50vw",
      maxHeight: "40vh",
      paddingInline: "2vw"
    },
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
