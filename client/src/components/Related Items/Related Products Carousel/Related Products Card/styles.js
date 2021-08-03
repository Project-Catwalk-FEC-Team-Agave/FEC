import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    height: 450,
    marginTop: '20px',
		marginBottom: '20px',
    marginRight: '10px',
    marginLeft: '10px'
  },
  media: {
    paddingTop: '100%'
  },
	overlay: {
		position: 'absolute',
		top: '-245px',
		left: '195px'
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