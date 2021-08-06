import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    minWidth: 245,
    height: 450,
    marginTop: '20px',
		marginBottom: '20px',
    marginRight: '10px',
    marginLeft: '10px',
    position: 'relative'
  },
  media: {
    height: '60%'
  },
	overlay: {
		position: 'relative',
		top: '-105%',
		left: '75%',
    zIndex: '99'
  },
  icon: {
    width: '30px',
    height: '30px'
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