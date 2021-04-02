import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex-column',
    marginTop: '32vh',
    backgroundColor: 'inherit',
    boxShadow: 'none',
    maxHeight: '90%',
    maxWidth: '60vw',
    marginInline: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',

    [theme.breakpoints.down('sm')]: {
      marginTop: '20vh',
      justifyContent: 'center',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },

  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    minWidth: '50%',
    minHeight: '60%',
    padding: '36.25%', // 16:9
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  cardActions: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'end',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center',
  },
  button: {
    fontFamily: 'Verdana, sans-serif;',
    textTransform: 'capitalize',
  },
}));
