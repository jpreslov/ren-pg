import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  root: {
    boxShadow: 'none',
  },
  grid: {
    marginTop: '18vh',
  },
  content: {
    display: 'inherit',
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8),
    [theme.breakpoints.down('sm')]: {
      marginTop: '1vh',
    },
    [theme.breakpoints.between('sm', 'lg')]: {
      marginTop: '6vh',
      justifyContent: 'center',
    },
    [theme.breakpoints.between('lg', 'xl')]: {
      marginTop: '6vh',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '10vh',
    },
  },
}));
