import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
		paddingTop: '50px'
  },
  overlay: {
    position: 'absolute',
    top: '50%',
		left: '100%'
  }
}));