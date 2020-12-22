import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('sm')]: {
      fontSize: theme.typography.subtitle2.fontSize,
    },
  },
}));

const TopBar = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position='static' elevation={0}>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            ZZIMCAR TOUR-TAXI ADMIN
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
