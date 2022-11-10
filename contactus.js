import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function ContactForm() {
    const [formStatus, setFormStatus] = React.useState('Send')



    const onSubmit = (e) => {
        e.preventDefault()
        setFormStatus('Submitting...')
        const { name, email, message } = e.target.elements
        let conFom = {
            name: name.value,
            email: email.value,
            message: message.value,
        }
        console.log(conFom)
    }
    return (
        <div>
            <img src="https://media.istockphoto.com/id/1357697293/photo/two-hands-together-caring-concept-image.jpg?s=612x612&w=0&k=20&c=kjU2nkeMG8_GLz3v8NYBYU90XF1a2z7EOrTReXKL-4c=" />

            <div className="container mt-5">
                <h2 className="mb-3">CONTACT US BY GIVING YOUR BASIC DETAILS</h2>
                <form onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Name
                        </label>
                        <input className="form-control" type="text" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="name">
                            Current Address
                        </label>
                        <input className="form-control" type="text" id="name" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="email">
                            Contact Number
                        </label>
                        <input className="form-control" type="number" id="email" required />
                    </div>
                    <div className="mb-3">
                        <label className="form-label" htmlFor="message">
                            Message
                        </label>
                        <textarea className="form-control" id="message" />
                    </div>
                    <button className="btn btn-danger" type="submit">
                        {formStatus}
                    </button>
                </form>
            </div>
            <div>
                <h3>WORKING OFFICE</h3>
                <Container className="box-top">
                    <Row>
                        <Col><p>
                            Maharashtra Office<br />
                            Paristhiti Foundation <br />
                            26-27, Saileela Tower, Raca Green Square, Gangapur<br /> Panchvati
                            Link Road, Nasik 422 005, Maharashtra. India,<br />
                            Call us- 91 253 2629939
                        </p></Col>
                        <Col>
                            <p>
                                Delhi-NCR Office<br />
                                Paristhiti Foundation<br />
                                3549 Kesar Villa Near HDFC School , Sector 57 ,Sushant<br /> Lok Phase 3, Gurgaon, Haryana 122003.,
                                Call us- 0124-4065603<br />
                            </p></Col>
                    </Row>
                    <br />
                    <Row>
                        <Col><p>
                            Bangolore Office<br />
                            Paristhiti Foundation<br />
                            Block C Second Floor, "Yashoda Bhavan" <br />House No 2806, Plot no 12B,Nagrik <br />Vikas Gruh Nirman Sahakari Samiti,Harpur Nagar, Bhande Plots,Umred Road,<br /> Nagpur 440 009
                            Call us- 9765107544</p></Col>
                        <Col>
                            <p>Hyderabad Office<br />
                                Paristhiti Foundation<br />
                                C/o  Lucio A.B.Do Rego H.No.1056/2 <br />Premeiro BairoSanta Cruz, Tiswadi,Hyderabad 803005
                                <br />Call us- 9158345458 /8262825623 /9834887093</p></Col>

                    </Row>
                </Container>
            </div>
            
        </div>
    )
}
export default ContactForm;