import React from 'react';

class ClassCounte extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.increments = this.increments.bind(this);
        this.decrements = this.decrements.bind(this);
    }

    increments() {
        this.setState({count:this.state.count += 1})
    }

    decrements() {
        this.setState({count:this.state.count -= 1})

    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.increments}>добавить лайки</button>
                <button onClick={this.decrements}>удалить лайки</button>
            </div>
        );
    }
};

export default ClassCounte;