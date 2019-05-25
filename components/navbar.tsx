import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Link, { LinkProps } from 'next/link';
import { connect } from 'react-redux';
import { AppState } from '../redux/store';
import { changeTabAction } from '../redux/actions';
import { NavBarState } from '../redux/types';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { UrlLike } from 'next/router';

interface TabContainerProps {
  children?: React.ReactNode;
}

function TabContainer(props: TabContainerProps) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  textColorSecondary: {
    color: theme.palette.secondary.main
  }
}));

interface ILinkProps{
  label: string
  href?: string | UrlLike
  className:string
}

function LinkTab(props: ILinkProps) {
  return <Link href={props.href}>
    <Tab label={
      <Typography variant='h6' align='center'>
        {props.label}
      </Typography>
    } {...props} />
  </Link>
}

interface INavBarProps {
  changeTabAction: typeof changeTabAction
  navbarState: NavBarState
}

function Navbar(props: INavBarProps) {
  const classes = useStyles();
  const value = props.navbarState.tab
  const theme = useTheme();
  const isBigScreen = useMediaQuery(theme.breakpoints.up('sm'));
  const tabsProps = { variant: isBigScreen ? "fullWidth" : "scrollable" }

  function handleChange(event:React.ChangeEvent<{}>, newValue: number) {
    props.changeTabAction(newValue);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" color="secondary" style={{
        background: `url("../static/images/barBackground.webp")`,
        /* Full height */
        /* Center and scale the image nicely */
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}>
        <Tabs
          value={value}
          onChange={handleChange}
          {...tabsProps}
          scrollButtons="off"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <LinkTab label="Welcome" className={classes.textColorSecondary} href="/" />
          <LinkTab label="Experience" className={classes.textColorSecondary} href="/experience" />
          <LinkTab label="Portfolio" className={classes.textColorSecondary} href="/portfolio" />
          <LinkTab label="About Me" className={classes.textColorSecondary} href="/about" />
          <LinkTab label="Contacts" className={classes.textColorSecondary} href="/contacts" />
          <LinkTab label="Redux" className={classes.textColorSecondary} href="/redux-test" />
        </Tabs>
      </AppBar>
    </div>
  );
}
const mapStateToProps = (state: AppState) => ({
  navbarState: state.navbarState,
})

export default connect(
  mapStateToProps,
  { changeTabAction }
)(Navbar);