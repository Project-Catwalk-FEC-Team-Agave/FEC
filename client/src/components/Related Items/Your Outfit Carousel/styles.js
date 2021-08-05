import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
		paddingTop: '50px'
  },
  root: {
    minWidth: 245,
    height: 450,
    marginTop: '20px',
		marginBottom: '20px',
    marginRight: '1%',
    marginLeft: '10px',
    position: 'relative'
  },
  media: {
    height: 450,
    position: 'relative'
  },
	overlay: {
		position: 'relative',
		top: '40%',
		left: '35%'
  },
  arrow: {
    position: 'absolute',
    top: '50%',
		left: '100%'
  },
  icon: {
    width: '60px',
    height: '60px',
    opacity: '50%'
  }
}));