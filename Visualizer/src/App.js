import React, {Component} from 'react';

import {HashRouter as Router, Switch, Route} from 'react-router-dom';
import Home from "./homeComponents/home";
import Pathfinder from "./pathfinderComponents/pathfinder";




class App extends Component {

    constructor() {
        super();
    }
    componentDidMount() {
        // console.log(window.innerHeight,"  ",window.innerWidth);
    }

    render() {
        return (
            <Router basename='/'>
                <Switch>
                    <Route path='/pathfinder'  component={Pathfinder}/>
                    {/* <Route path='/prime' component={Seive}/>
                    <Route path='/sort' component={Sort}/>
                    <Route path='/nqueen' component={Queen}/>
                    <Route path='/convexhull' component={ConvexHull}/>
                    <Route path='/binarysearch' component={BinarySearch}/>
                    <Route path='/recursivesort' component={RecursiveSort}/>
                    <Route path='/turing' component={TuringMachine}/>
                    <Route path='/15puzzle' component={Puzzle}/>
                    <Route path='/graph' component={Graph}/> */}
                    <Route path='/' component={Home}/>

                </Switch>
            </Router>
        );
    }
}

export default App;
