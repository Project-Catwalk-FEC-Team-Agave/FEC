import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
		paddingTop: '50px'
  },
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
		top: '20px',
		left: '195px'
  }
}));