import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    maxHeight: 'relative',
    marginTop: '20px',
		marginBottom: '20px'
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