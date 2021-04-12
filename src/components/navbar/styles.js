import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 0;

export default makeStyles((theme) => ({
  // toolBar: {
  //   justifySelf: 'center'
  // },
  appBar: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    boxShadow: 'none',
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      // marginLeft: drawerWidth,
    },
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    textDecoration: 'none',
  },
  image: {
    padding: '3vh',
    width: '50%',
    opacity: '0.8',
    [theme.breakpoints.down('sm')]: {
      width: `80%`,
      height: `10%`,
    },
  },
  buttonGroup: {
    textDecoration: 'none',
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    fontWeight: '600',
    textTransform: 'capitalize',
    [theme.breakpoints.down('sm')]: {
      width: '20vw',
      fontSize: 14
    },
    [theme.breakpoints.between('md', 'xl')]: {
      fontSize: 18
      
    },
  },
  badge: {
    left: '1vw',
    color: 'primary',
    [theme.breakpoints.down('sm')]: {
      marginLeft: '2.5vw',
    },
    [theme.breakpoints.between('md', 'xl')]: {
      marginLeft: '0.2vw',
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
