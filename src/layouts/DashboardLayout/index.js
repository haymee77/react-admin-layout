import React, { useState, useCallback, useRef } from 'react';
import TopBar from './TopBar';
import NavBar from './NavBar';
import { Container, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    flexDirection: 'column',
  },
  wrapper: {
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: 272,
    },
  },
}));

const Dashboard = ({ children }) => {
  const classes = useStyles();
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const onMobileNavOpen = useCallback((e) => {
    setMobileNavOpen(true);
  }, []);
  return (
    <div className={classes.root}>
      <TopBar onMobileNavOpen={onMobileNavOpen} />
      <NavBar
        onMobileNavClose={() => setMobileNavOpen(false)}
        openMobileNav={isMobileNavOpen}
      />
      <Container className={classes.wrapper}>{children}</Container>
    </div>
  );
};

export default Dashboard;
