import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    height: 410,
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
  }
}));