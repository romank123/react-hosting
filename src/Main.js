import React from 'react';

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            title: 'No Title'
        };

        this.i = 0;
    }
    render() {
        return (
            <button  onClick={() => {
                this.i += 1;
                this.setState({title: this.i});
            }}>{this.state.title}</button>
        );
    }
}
export default Main;
