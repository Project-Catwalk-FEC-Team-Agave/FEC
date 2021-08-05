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
		position: 'absolute',
		top: '0%',
		left: '80%',
    width: '50px',
    height: '50px',
    zIndex: 99
  }
}));