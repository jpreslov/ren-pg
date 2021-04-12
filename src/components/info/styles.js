import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  grid: {
    display: 'flex',
    marginTop: '35vh',
    justifyContent: 'center',
    alignContent: 'center',
  },
  button: {
    height: '20vh',
    width: '25vh',
    border: 'none'
  },
  svgIcon: {
    fontSize: '10vh'
  }
}));
