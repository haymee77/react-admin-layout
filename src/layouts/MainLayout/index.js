import { Container, makeStyles } from '@material-ui/core';
import React from 'react';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%',
    flexDirection: 'column',
  },
}));

const MainLayout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <TopBar />
      <Container>{children}</Container>
    </div>
  );
};

export default MainLayout;
