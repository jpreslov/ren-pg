import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    display: 'flex',
    maxWidth: '100%',
    marginTop: '32vh',
  },
  grid: {
    justifyContent: 'center',
    alignItems: 'center'
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
    justifyContent: 'center',
  },
}));
