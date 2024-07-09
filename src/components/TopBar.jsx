import React from 'react'

function TopBar() {
    return (
        <>
            <nav className="navbar navbar-light bg-light static-top">
                <div className="container">
                    <a className="navbar-brand" href="#!">
                        <h1>
                            <strong>
                                <span style={{fontFamily: 'Product Sans, sans-serif;font-size:200px'}}>
                                    <span class="g-blue">G</span>
                                    <span class="o-red">o</span>
                                    <span class="o-yellow">o</span>
                                    <span class="g-blue">g</span>
                                    <span class="l-green">l</span>
                                    <span class="o-red e-red">e</span>
                                </span>
                            </strong>
                        </h1> Tech Landing Mockup</a>
                    <a className="btn btn-primary" href="#signup">Sign Up</a>
                </div>
            </nav>
        </>
    )
}

export default TopBar