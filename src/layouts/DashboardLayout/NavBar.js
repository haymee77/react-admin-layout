import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import { Drawer, Hidden } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.paper,
  },
  desktopDrawer: {
    top: 64,
    width: 256,
    height: 'calc(100% - 64px)',
  },
  mobileDrawer: {
    width: 256,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const NavBar = ({ onMobileNavClose, openMobileNav }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const content = (
    <List
      component='nav'
      aria-labelledby='nested-list-subheader'
      subheader={
        <ListSubheader component='div' id='nested-list-subheader'>
          Nested List Items
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary='Sent mail' />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary='Drafts' />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary='Inbox' />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout='auto' unmountOnExit>
        <List component='div' disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary='Starred' />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );

  return (
    <>
      <Hidden xsDown>
        <Drawer
          anchor='left'
          open
          classes={{ paper: classes.desktopDrawer }}
          variant='persistent'
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden smUp>
        <Drawer
          anchor='left'
          open={openMobileNav}
          onClose={onMobileNavClose}
          classes={{ paper: classes.mobileDrawer }}
          variant='temporary'
        >
          {content}
        </Drawer>
      </Hidden>
      {/* <Hidden lgUp>lgUp</Hidden>
      <Hidden mdDown>mdDown</Hidden>
      <Hidden mdUp>mdUp</Hidden> */}
    </>
  );
};

NavBar.protoTypes = {
  onMobileNavClose: PropTypes.func,
  openMobileNav: PropTypes.bool,
};

export default NavBar;
