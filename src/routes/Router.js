import React from 'react';
import Searchlayout from '../layout/Search.layout';
import { Router } from "@reach/router"
import Header from '../components/Header';
import EmpOverviewComponent from '../components/EmpOverview.component';

const Routes = (props) => {
    // console.log(props);

    return (
            <Router>
                <Header path="/">
                    <Searchlayout default path="/" />
                    <EmpOverviewComponent path="/overview/:name" />
                </Header>
            </Router>
    )
}

export default Routes;