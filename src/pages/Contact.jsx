import React from 'react'
import Header from '../components/Header'

function Contact() {
    return (

        <div>
            <Header />
            <div className="container pt-5 mb-5">
                <div className="row justify-content-center align-items-center pt-5">
                    <div className="col-md-6 p-5"><img src="/contactus.svg" alt className="w-100 aos-init" data-aos="slide-right" /></div>
                    <div className="col-md-6">
                        <div className="contact-form n-box2 aos-init aos-animate" data-aos="slide-up">
                            <h3>Contact US</h3>
                            <hr />
                            <input type="text" className="form-control" placeholder="Name" /><input type="text" className="form-control" placeholder="Email" />
                            <textarea className="form-control" placeholder="Description" cols={30} rows={5} defaultValue={""} />
                            <button>SUMBIT</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
