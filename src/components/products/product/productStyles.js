import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
 
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(4),
    justifyContent: 'center'
  },
  root: {
    maxWidth: '100%',
    backgroundColor: 'inherit',
    boxShadow: 'none',
    minHeight: '20vh',
    minWidth: '30vw',
    // justifyContent: 'center',
    flexWrap: 'wrap',
    flexDirection: 'row',
    
  },
  link: {
    textDecoration: 'none'
  },
  media: {
    width: '100%',
    height: '90%',
    padding: '36.25%', // 16:9
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    }
  },
  price: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
    }
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'center',
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
}));
