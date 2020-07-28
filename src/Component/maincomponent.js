import React, { Component } from 'react';
import Header from './headercomponent';
import Testbox from './testbox3';
class Main extends Component {
    constructor(props){
        super(props);

        this.state = {}
    }

    render(){
        return(
            <div>
                <Header />
                <Testbox />
            </div>
        );
    }
}

export default Main;