import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  cartGrid: {},
  title: {
    marginTop: '20%',
    textAlign: 'center',
    [theme.breakpoints.between('sm', 'lg')]: {
      marginTop: '20%',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '35%',
    },
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
}));
