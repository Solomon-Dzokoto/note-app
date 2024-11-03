import { Nav, Navbar, Container } from "react-bootstrap";  
import { LinkContainer } from "react-router-bootstrap";  
import { Link } from "react-router-dom";
const Header = () => {  

    return (  
        <header>  
            <Navbar bg="primary" variant="dark">  
                <Container className="d-flex justify-content-between">  
                    <Link className="text-decoration-none" to='/'>
                        <Navbar.Brand  className="text-white">  
                            <small>note</small>App<span className="text-warning">•</span>  
                        </Navbar.Brand>  
                    </Link>
                    <Nav className="ms-auto " role="navigation">  
                        <LinkContainer to='/'>  
                            <Nav.Link className="active" aria-current="page">Home</Nav.Link>  
                        </LinkContainer>  
                        <LinkContainer to='/about'>  
                            <Nav.Link>About</Nav.Link>  
                        </LinkContainer>  
                    </Nav>  
                </Container>  
            </Navbar>  
        </header>  
    );  
};  

export default Header;  