import { makeStyles } from "@material-ui/core/styles";
import { isSafari } from "react-device-detect";

export default makeStyles((theme) =>
  isSafari
    ? {
        container: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: "3vh",
        },
        cartItem: {
          // flexDirection: "row",
          width: "90%",
          alignItems: "center",
          justifyContent: "center",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            marginTop: "1.5vh",
            paddingTop: "1vh",
            paddingBottom: "1vh",
          },
          [theme.breakpoints.up("lg")]: {width: "70%"},
        },
        picAndButton: {
          width: "32%",
          float: "left",
          alignItems: "center",
          [theme.breakpoints.down("xs")]: { width: "100%", justifyContent: "center" },
          [theme.breakpoints.between("md", "lg")]: {width: "10%"},
          [theme.breakpoints.up("lg")]: {width: "20%"},
        },
        removeButton: {
          margin: "3vh 0 -2vh 2vw",
          backgroundColor: "white",
          borderRadius: "50%",
          cursor: "pointer",
        },
        media: {
          display: "block",
          width: "18%",
          padding: "30%",
          margin: "0 0 2% 10%",
        },
        text: {
          fontSize: 16,
          [theme.breakpoints.down("md")]: { fontSize: 14 },
        },
        cardContent: {
          [theme.breakpoints.down("sm")]: {
            textAlign: "start",
          },
          [theme.breakpoints.up("md")]: {
            textAlign: "start",
            marginRight: "2vw",
          },
        },

        button: {
          textTransform: "capitalize",
          width: "4vw",
        },
        qtyInput: {
          width: "2vw",
          cursor: "pointer",
        },
      }
    : {
        //cart item styles for every other browser
        container: {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "82vw",
          marginTop: "3vh",
          [theme.breakpoints.down("md")]: {
            width: "90%",
          },
        },
        cartItem: {
          flexDirection: "row",
          width: "90%",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            marginTop: "1.5vh",
            paddingTop: "1vh",
            paddingBottom: "1vh",
          },
          [theme.breakpoints.between("xs", "md")]: {
            width: "60vw",
          },
        },
        picAndButton: {
          width: "32%",
          float: "left",
          alignItems: "center",
          [theme.breakpoints.down("sm")]: { width: "100%", justifyContent: "center" },
        },
        removeButton: {
          margin: "3vh 0 -2vh 2vw",
          backgroundColor: "white",
          borderRadius: "50%",
          cursor: "pointer",
        },
        media: {
          display: "block",
          width: "18%",
          padding: "30%",
          margin: "0 0 2% 10%",
        },
        text: {
          fontSize: 16,
          [theme.breakpoints.down("md")]: { fontSize: 14 },
        },
        cardContent: {
          [theme.breakpoints.down("sm")]: {
            textAlign: "start",
          },
          [theme.breakpoints.up("md")]: {
            textAlign: "start",
            marginRight: "2vw",
          },
        },

        button: {
          textTransform: "capitalize",
          width: "4vw",
        },
        qtyInput: {
          width: "2vw",
          cursor: "pointer",
        },
      }
);
