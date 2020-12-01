import React, { Component } from 'react'

class Calculator extends Component {
    render() {
        return (
            <div>
                <h1 className="text-right">123.0</h1>
                <hr />
                <ul className="list-unstyled">
                    <li className="text-right text-success title">
                        gg = 0
                        <button className="btn btn-light btn-sm">X</button>
                    </li>
                    <li className="text-right text-success title">
                        gg2 = 1
                        <button className="btn btn-light btn-sm">X</button>
                    </li>
                </ul>
                <hr />
                <button className="btn btn-block btn-danger title">summit</button>
                <button className="btn btn-block btn-secondary title">cancel</button>
            </div>
        )
    }
}

export default Calculator