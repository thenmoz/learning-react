import React from 'react'

const Footer = (props) => {
    const { username, password } = props;
    return (
        <div className="container-fluid">
            <hr />
            <div className="text-center title text-uppercase">
                <span className="text-danger">Powored by</span> <span className="text-muted"> {username + ' ' + password}</span>
            </div>
        </div>
    )
}

export default Footer