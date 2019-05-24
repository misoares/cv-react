import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Link from 'next/link';
import { connect } from 'react-redux';
import { AppState } from '../redux/store';
import { changeTabAction } from '../redux/actions';
import { NavBarState } from '../redux/types';

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

function LinkTab(props) {
  return <Link href={props.href}>
    <Tab {...props} />
  </Link>
}

interface INavBarProps {
  changeTabAction: typeof changeTabAction
  navbarState: NavBarState
}

function Navbar(props:INavBarProps) {
  const classes = useStyles();
  const value = props.navbarState.tab
  
  function handleChange(event, newValue: number) {
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
              variant="fullWidth"
              scrollButtons="on"
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