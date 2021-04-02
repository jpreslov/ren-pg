import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  cartItem: {
    [theme.breakpoints.down('sm')]: {
      marginTop: '2vh',
      marginRight: '3vh',
      marginBottom: '3vh',
      marginLeft: '3vh',
      paddingTop: '1vh',
      paddingBottom: '1vh',
    },
  },
  media: {
    height: '34vh',
  },
  text: {
    fontSize: 16,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    textTransform: 'capitalize',
    width: '4vw',
  },
}));
