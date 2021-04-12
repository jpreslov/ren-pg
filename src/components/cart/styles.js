import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  cartGrid: {
    display: 'flex',
    justifySelf: 'center',
    flexDirection: 'column',
    float: 'left',
  },
  title: {
    marginTop: '20vh',
    textAlign: 'center',
    [theme.breakpoints.between('xs', 'lg')]: {
      marginTop: '10vh',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop: '15vh',
    },
    [theme.breakpoints.up('lg')]: {
      marginTop: '22vh',
      marginBottom: '2vh',
    },
  },
  cartDetails: {
    display: 'flex',
    width: '30vw',
    marginInline: 'auto',
    justifyContent: 'space-between',
    marginTop: '3vh'
  },
  buttonDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyButton: {
    minWidth: '100px',
    height: '4vh',
    textTransform: 'capitalize',
    backgroundColor: '#009c7b',

    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    minWidth: '100px',
    height: '4vh',
    textTransform: 'capitalize',
  },
  link: {
    textDecoration: 'none',
  },

  emptyCartDiv: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignContent: 'center',
    textTransform: 'capitalize',
  },
  button: {
    [theme.breakpoints.up('md')]: {
      width: '10vw',
    },
    alignSelf: 'center',
    fontWeight: '600',
    textTransform: 'capitalize',
    color: 'white',
    backgroundColor: '#009c7b',
    marginTop: '1vh',
    width: '40vw',
  },
}));
