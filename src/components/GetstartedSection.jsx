import React, {useState} from 'react'
import Form from './Form'


function GetstartedSection() {

  return (
    <>
    <section class="call-to-action text-white text-center" id="signup">
            <div class="container position-relative">
                <div class="row justify-content-center">
                    <div class="col-xl-6">
                        <h2 class="mb-4">Ready to get started? Sign up now!</h2>
                        {<Form/>}
                        
                    </div>
                </div>
            </div>
        </section>
    </>

  )
}

export default GetstartedSection