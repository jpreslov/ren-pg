import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginTop: '32vh',
    backgroundColor: 'inherit',
    boxShadow: 'none',
    maxHeight: '90%',
    maxWidth: '50vw',
    marginInline: 'auto',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',

    [theme.breakpoints.down('sm')]: {
      marginTop: '20vh',
      justifyContent: 'center',
    },
    [theme.breakpoints.up('xl')]: {
      marginTop: '25vh',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    fontWeight: '500',
  },
  
  grid: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  media: {
    height: '10px',
    padding: '36.25%', // 16:9
  },
  text: {
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  cardActions: {
    flexDirection: 'column',
    textAlign: 'start',
    float: 'left'
  },
  cardContent: {
    flexDirection: 'column',
    textAlign: 'start',
    
  },
  button: {
    textTransform: 'capitalize',
    color: 'white',
    backgroundColor: '#009c7b',
  },
  productInfo: {
    flexDirection: 'column',
    // width: '100vw',
    fontWeight: '600',
  },
  inputDiv: {
    flexDirection: 'column',
    display:'inherit',
    height: '7vh',
    fontWeight: '600',

  }
}));
