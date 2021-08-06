import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    minWidth: 245,
    height: 450,
		marginBottom: '20px',
    marginRight: '10px',
    marginLeft: '5%',
    position: 'relative'
  },
  media: {
    height: '65%'
  },
	overlay: {
		position: 'relative',
		top: '-160%',
		left: '60%',
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