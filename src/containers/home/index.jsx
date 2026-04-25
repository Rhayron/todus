import Navbar from "../../components/Navbar"
import Hero from "../../components/Hero"
import Solutions from "../../components/Solutions"
import AISolutions from "../../components/AISolutions"
import ComputerVision from "../../components/ComputerVision"
import ContactForm from "../../components/ContactForm"
import Footer from "../../components/Footer"
import { Container } from "./styles"

function Home() {
    return (
        <Container>
            <Navbar />
            <Hero />
            <Solutions />
            <AISolutions />
            <ComputerVision />
            <ContactForm />
            <Footer />
        </Container>
    )
}

export default Home
