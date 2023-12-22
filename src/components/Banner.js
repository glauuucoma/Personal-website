import { useState, useEffect } from "react";
import { Container, Row, Col} from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/Banner-img.png"

export const Banner = () =>{

    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Front-End Developer", "iOS Engineer", "Computer Science Student", "Amateur Climber", "Professional Ramen Eater"];
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100); 
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () =>{
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let UpdatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(UpdatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }

        if(!isDeleting && UpdatedText === fullText){
            setIsDeleting(true);
            setDelta(period);
        } else if(isDeleting && UpdatedText === ''){
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }

    const scrollToContacts = () => {
        const contactsElement = document.getElementById('connect');
        if (contactsElement) {
          contactsElement.scrollIntoView({ behavior: 'smooth' });
        }
      };


    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} sm={12} md={6} xl={6}>
                                <span className="tagline"> Welcome to my Portfolio</span>
                                <h1>{`Hi, I'm Davyd. `}</h1>
                                <p className="banner-personality-description">{`I am - `}<span className="wrap">{text}</span></p>
                                <p className="banner-description">
Seneca Polytechnic student and aspiring software developer with a 3.9 GPA, actively seeking a internship. <br /><br /> My journey in IT has taken me from Ukraine to North America, engaging in events like SwiftTO and volunteering at the Collision conference. Outside of tech, I'm an outdoor enthusiast, passionate about climbing, snowboarding, and dreaming of conquering Yosemite's El Capitan.</p>
                                <button onClick={scrollToContacts}>Lets connect <ArrowRightCircle size={25}/></button>
                    </Col>
                    <Col xs={12} sm={12} md={6} xl={6}>
                        <img src={headerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}