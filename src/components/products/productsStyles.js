import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  grid: {
    marginTop: '18vh',
    [theme.breakpoints.between('sm', 'lg')]: {
      display: 'flex',
      marginTop: '18vh',
      justifyContent: 'center',
      alignItems: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      marginTop: '12vh',
    },
  },
  toolbar: theme.mixins.toolbar,
  root: {
    boxShadow: 'none',
    minHeight: '30vh',
    minWidth: '30vw',
    marginTop: '2vh',
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(8),
    marginInline: '2vw',
  },
}));
