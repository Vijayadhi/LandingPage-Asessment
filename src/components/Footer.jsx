import React from 'react'

function Footer() {
    return (
        <>
            <footer className="footer bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 h-100 text-center text-lg-start my-auto">
                            <ul className="list-inline mb-2">
                                <li className="list-inline-item"><a href="mastercodeaddict.me">About</a></li>
                                <li className="list-inline-item">⋅</li>
                                <li className="list-inline-item"><a href="#!">Contact</a></li>
                            </ul>
                            <p className="text-muted small mb-4 mb-lg-0">&copy; Google Tech MockUp 2024. <br />By Vigneshwaran J</p>
                        </div>
                        <div className="col-lg-6 h-100 text-center text-lg-end my-auto">
                            <ul className="list-inline mb-0">
                                <li className="list-inline-item me-4">
                                    <a href="https://wa.me/qr/GECEIZXGJLGSG1"><i className="bi-whatsapp fs-3"></i></a>
                                </li>
                                
                                <li className="list-inline-item">
                                    <a href="https://www.instagram.com/code_addict.2004?igsh=ZXZiaDRxZjF3bzZm"><i className="bi-instagram fs-3"></i></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}

export default Footer