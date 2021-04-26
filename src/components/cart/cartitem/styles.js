import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'inherit',
    flexDirection: 'column',
    width: '100%',
    paddingLeft: '0',
    marginTop: '3vh',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: { width: '95%' },
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '90%',
    [theme.breakpoints.down('sm')]: {
      marginTop: '2vh',
      marginRight: '3vh',
      // marginBottom: '0.5vh',
      // marginLeft: '3vh',
      paddingTop: '1vh',
      paddingBottom: '1vh',
      flexDirection: 'column',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      width: '40vw',
    },
  },
  media: {
    float: 'left',
    height: '18vh',
    width: '11vw',
    margin: '1vw',
    [theme.breakpoints.up('md')]: { marginRight: '3vw' },
    [theme.breakpoints.down('md')]: { width: '40vw', height: '20vh' },
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
    textTransform: 'capitalize',
    width: '4vw',
  },
  removeButton: {
    marginLeft: '1vw',
    marginTop: '1vw',
    // size: '5vh',
    position: 'fixed',
  },
  qtyInput: {
    width: '2vw',
    cursor: 'pointer',
  },
}));
