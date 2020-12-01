import React, { Component } from 'react'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date() }

    }

    componentDidMount() {
        this.timerId = setInterval(() => this.tick(), 1000)
    }

    componentDidUpdate() {

    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }
    tick() {
        this.setState({ date: new Date() })
    }
    render() {
        const imgStyle = { height: 50 }
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 text-left">
                        <h1><img style={imgStyle} src="./images/logo/logo.png" alt="" /> Healty Cafe' </h1>
                    </div>
                    <div className="col-md-4 text-right">
                        <h5 className="mt-4">{this.state.date.toLocaleTimeString()}</h5>
                    </div>
                </div>
                <hr />
            </div>
        )
    }
}

export default Header