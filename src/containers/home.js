import React, { Component } from 'react';
import { connect } from 'react-redux';

class Home extends Component {

    render () {
        return (
            <div className="title m-b-md">
                React
            </div>
        );
    }
}

Home = connect()(Home);

export default Home;
