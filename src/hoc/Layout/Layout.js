import React, { Component } from "react";
import Aux from "../Auxiliary/Auxiliary";
import classes from "./Layout.css";
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {

    state = {
        showSideDrawer: false
    }

    sideDrawerCloserHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    sideDrawerToogleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    }

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToogleHandler} ></Toolbar>
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerCloserHandler}></SideDrawer>
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    };
};

export default Layout;