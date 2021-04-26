import { makeStyles } from "@material-ui/core/styles";
import { isSafari } from "react-device-detect";

export default makeStyles((theme) =>
  isSafari
    ? {
        container: {
          marginTop: "3vh",
          [theme.breakpoints.down("sm")]: {
            width: "90%",
          },
        },
        cartItem: {
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
        picAndButton: {
          display: "inherit",
          float: "left",
          width: "auto",
        },
        removeButton: {
          float: "left",
          margin: "0 1vw 1vw 1vw",
          backgroundColor: "white",
          borderRadius: "50%",
          cursor: "pointer",
        },
        media: {
          height: "18vh",
          width: "11vw",
          margin: "1vw",
          [theme.breakpoints.up("md")]: { marginRight: "3vw" },
          [theme.breakpoints.down("md")]: { width: "86%", height: "30vh", justifySelf: "center" },
          // [theme.breakpoints.between('md', 'lg')]: { height: '86%', width: "auto" },
        },
        text: {
          fontSize: 16,
          [theme.breakpoints.down("md")]: { fontSize: 14 },
          // marginRight: "2vw"
        },
        cardContent: {
          [theme.breakpoints.down("sm")]: {
            textAlign: "end",
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
          display: "inherit",
          flexDirection: "column",
          width: "90vw",
          marginLeft: "0",
          paddingLeft: "0",
          marginTop: "3vh",
          [theme.breakpoints.down("sm")]: {
            width: "90%",
          },
        },
        cartItem: {
          // flexDirection: "row",
          [theme.breakpoints.down("sm")]: {
            marginTop: "2vh",
            paddingTop: "1vh",
            paddingBottom: "1vh",
            flexDirection: "column",
          },
          [theme.breakpoints.between("sm", "lg")]: {
            width: "60vw",
          },
        },
        picAndButton: {
          display: "block",
          // float: "left",
          maxHeight: "50vh",
          maxWidth: "46vw",
          width: "auto",
          height: "auto",
        },
        removeButton: {
          float: "left",
          margin: "0 1vw 1vw 1vw",
          backgroundColor: "white",
          borderRadius: "50%",
          cursor: "pointer",
        },
        media: {
          display: "block",
          maxHeight: "30vh",
          maxWidth: "28vw",
          width: "auto",
          height: "auto",
          margin: "1vw",
          [theme.breakpoints.down("md")]: { width: "86%", height: "30vh", justifySelf: "center" },
          // [theme.breakpoints.between('md', 'lg')]: { height: '86%', width: "auto" },
        },
        text: {
          fontSize: 16,
          [theme.breakpoints.down("md")]: { fontSize: 14 },
          // marginRight: "2vw"
        },
        cardContent: {
          [theme.breakpoints.down("sm")]: {
            textAlign: "end",
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
