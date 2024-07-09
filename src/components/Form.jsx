import React, { useState } from 'react'
import Snackbar from '@mui/material/Snackbar';


function Form() {
    const [toggle, setOpen] = useState(false)
    let [email, setEmail] = useState("")

    const handleClick = () => {
        if (email === "") {
            handleClose

        }
        else {
            setOpen(true);
        }
    }
    const handleClose = () => {
        setOpen(false);
    }
    return (
        <>
            <form class="form-subscribe" id="contactFormFooter" data-sb-form-api-token="API_TOKEN">
                {/* <!-- Email address input--> */}
                <div class="row">
                    <div class="col">
                        <input class="form-control form-control-lg" id="emailAddressBelow" type="email" placeholder="Email Address" data-sb-validations="required,email" onChange={(e) => setEmail(e.target.value)} />
                        <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:required">Email Address is required.</div>
                        <div class="invalid-feedback text-white" data-sb-feedback="emailAddressBelow:email">Email Address Email is not valid.</div>
                    </div>
                    <div class="col-auto"> <button class="btn btn-primary btn-lg" id="submitButton" type='create' onClick={handleClick}>Submit</button>
                        <Snackbar
                            open={toggle}
                            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                            autoHideDuration={5000}
                            onClose={handleClose}
                            message="Email Successfully added to Subscription List"
                        /></div>
                </div>
            </form>

        </>

    )
}

export default Form