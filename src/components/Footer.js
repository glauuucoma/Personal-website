import { Container,Row,Col } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon-github.png';
import navIcon2 from '../assets/img/nav-icon-linkedin.png';
import navIcon3 from '../assets/img/nav-icon-insta.png';

export const Footer = () => {
    return(
        <footer className="footer">
            <Container>
                <Row>
                    <Col sm={12} md={6} className="foooter-name-wrapper">
                        <p className="footer-title">Davyd Kuleba</p>
                    </Col>
                    <Col sm={12} md={6} className="text-center text-sm-end foooter-social-wrapper">
                        <div className="social-icon">
                            <a href="https://github.com/glauuucoma"><img src={navIcon1} alt="GitHub Link" /></a>
                            <a href="https://www.linkedin.com/in/davyd-kuleba-716740216/"><img src={navIcon2} alt="LinkedIn Link" /></a>
                            <a href="https://www.instagram.com/glauuucoma/"><img src={navIcon3} alt="Instagram Link" /></a>
                        </div>
                        <p className="footer-copyright">Copyright 2024. All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}