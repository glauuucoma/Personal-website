import { Col, Row, Container } from "react-bootstrap";
import contactImg from "../assets/img/contact-img1.png"



export const ContactForm = () =>{
    return(

        <section className="contact" id="connect">

        <form name="contact" netlify netlify-honeypot="bot-field" hidden>
            <input type="text" name="firstname" />
            <input type="text" name="lastname" />
            <input type="email" name="email" />
            <input type="tel" name="phone" />
            <textarea name="message"></textarea>
        </form>

            <Container>
                <Row>
                    <Col lg={6} className="contact-image-wrapper">
                        <img src={contactImg} alt="Contact Us" />
                    </Col>
                    <Col lg={6}>
                        <h2>Get In Touch</h2>
                        <form name="contact" method="post">
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="firstname" placeholder="First Name" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="text" name="lastname" placeholder="Last Name"  />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="email" name="email" placeholder="Email Adress" />
                                </Col>
                                <Col sm={6} className="px-1">
                                    <input type="tel" name="phone" placeholder="Phone Number" />
                                </Col>
                                <Col>
                                <textarea row="6" placeholder="Message" name="message"></textarea>
                                <button type="submit"><span>Submit</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}