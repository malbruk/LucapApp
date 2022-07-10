import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Container from "react-bootstrap/Container";

export default function MainLayout(props) {
    return <div>
        <Header/>
        <Container fluid="md">{props.children}</Container>
        <Footer/>
    </div>
}