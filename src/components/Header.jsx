import React, { useState } from 'react'

import Form from './Form'

function Header() {
   

    return (
        <>

            <header className="masthead" style={{background-image: url("https://i.pinimg.com/originals/65/80/2d/65802d8968234537dda78cbe95295160.jpg")}}>
                <div className="container position-relative">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="text-center text-white">
                                {/* <!-- Page heading--> */}
                                <h1 className="mb-5">Subscribe now to get new Tech updates! </h1>
                                {<Form/>}
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header
