import React, { Component } from 'react';
import Navbar from "./navbar";
import Greet from "./greet";
import TypeWriterC from "./typewriter";
import Cards from "./cards";
import Footer from "./footer";
import ImgMediaCard from "./card";
import { TextField } from '@material-ui/core';
import ImgMediaCard2 from './card2';

// {
//     id: 2,
//     title: "Kadane's Algorithm",
//     description: "Visualize graph algorithms like dijkstra, BFS, DFS",
//     route: "https://deepraj-chawda.github.io/Visualizer-for-Greedy-and-DP/kadane.html",
//     img: "https://cdn.programiz.com/sites/tutorial2program/files/c-arrays.jpg"
// }

class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <Greet />
                <TypeWriterC />
                <Cards />
                <React.Fragment>
                    <div className="d-flex flex-wrap justify-content-center Cards p-lg-5" onClick={() => window.open("https://deepraj-chawda.github.io/Visualizer-for-Greedy-and-DP/kadane.html", "_target")}>
                        {
                                <div>
                                    <ImgMediaCard2
                                        className="d-flex flex-wrap"
                                        key={2}
                                        card={{
                                            id: 2,
                                            title: "Kadane's Algorithm",
                                            description: "Visualize graph algorithms like dijkstra, BFS, DFS",
                                            route: "",
                                            img: "https://cdn.programiz.com/sites/tutorial2program/files/c-arrays.jpg"
                                        }} />
                                </div>
                        }

                    </div>
                </React.Fragment>
                
                <Footer />
            </React.Fragment>
        );
    }
}

export default Home;