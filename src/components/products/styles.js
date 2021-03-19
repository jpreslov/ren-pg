import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  grid: {
    marginTop: '18vh', //fix later lol
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    maxWidth: '100%',
    backgroundColor: 'inherit',
    boxShadow: 'none',
    minHeight: '30vh',
    minWidth: '30vw',
    marginTop: '2vh',
    marginInline: '0',
    justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  link: {
    textDecoration: 'none'
  },
  media: {
    minWidth: '60%',
    minHeight: '90%',
    padding: '36.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
}));
