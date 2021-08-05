import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    maxWidth: 245,
    minWidth: 245,
    height: 450,
    marginTop: '20px',
		marginBottom: '20px',
    marginRight: '1%',
    marginLeft: '5%'
  },
  media: {
    height: '60%'
  },
	overlay: {
		position: 'absolute',
		top: '20px',
		left: '500px',
    width: '40px',
    height: '40px'
  }
}));