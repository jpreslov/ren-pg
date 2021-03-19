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
    justifySelf: 'center',
    maxWidth: '20%',
    maxHeight: '20%',
    padding: '26.25%', // 16:9,
    marginInline: 'auto'
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
}));
