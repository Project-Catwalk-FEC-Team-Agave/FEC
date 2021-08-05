import React from 'react';
import { usePoroductStore, useStylesStore } from './store';
import CheckIcon from '@material-ui/icons/Check';
import Badge from '@material-ui/core/Badge';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: '$ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}))(Badge);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const StyleSelector = () => {
  const allStyles = useStylesStore((state) => state.allStyles);
  const name = useStylesStore((state) => state.currentStyleName);
  const classes = useStyles();
  const currentStyleId = useStylesStore((state) => state.currentStyleId);

  const handleClick = useStylesStore((state) => state.handleStyleChange);
  // console.log('currentid', allStyles[0].photos);
  return (
    <div>
      <h3 className="style-name">Style > {name}</h3>

      <div className="style-container">
        <Grid container spacing={1}>
          {allStyles.map((style, i) => (
            <Grid item xs={2} key={i}>
              <Badge
                id={style.style_id}
                overlap="circular"
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                badgeContent={
                  <CheckIcon style={{ fill: 'green' }} fontSize="small" />
                }
                invisible={style.style_id !== currentStyleId}
              >
                <Avatar
                  key={i}
                  src={style.photos[0].url}
                  id={style.style_id}
                  onClick={handleClick}
                />
              </Badge>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};
export default StyleSelector;
