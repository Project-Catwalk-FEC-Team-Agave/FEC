import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    minWidth: 245,
    height: 450,
		marginBottom: '20px',
    position: 'relative'
  },
  media: {
    height: '65%'
  },
	overlay: {
		position: 'relative',
		top: '0%',
		left: '-15%',
    width: '50px',
    height: '50px',
    zIndex: 1200
  },
  icon: {
    width: '30px',
    height: '30px',
    zIndex: 1200
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  }
}));