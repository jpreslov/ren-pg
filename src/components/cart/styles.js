import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
 
  title: {
    marginTop: '20%',
    textAlign: 'center'
    
  },
  buttonDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
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
