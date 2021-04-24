import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  container: {
    display: 'inherit',
    flexDirection: 'column',
    width: '50vw',
    marginLeft: '0',
    paddingLeft: '0',
    marginTop: '3vh',
  },
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'center',
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
    height: '20vh',
    width: '20vh',
    marginTop: '1vw',
    marginLeft: '1vw',
    [theme.breakpoints.down('md')]: { width: '86%', alignSelf: 'center' },
  },
  text: {
    fontSize: 16,
    // marginRight: "2vw"
  },
  cardContent: {
    textAlign: 'start',
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
